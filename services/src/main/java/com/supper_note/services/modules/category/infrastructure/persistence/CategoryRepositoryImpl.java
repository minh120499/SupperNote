package com.supper_note.services.modules.category.infrastructure.persistence;

import com.supper_note.services.modules.category.domain.service.CategoryRepository;
import com.supper_note.services.shared.exceptions.NotFoundException;
import com.supper_note.services.shared.mapper.MapperUtils;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Repository
@AllArgsConstructor
public class CategoryRepositoryImpl implements CategoryRepository {
    private final CategoryJpaRepository categoryJpaRepository;

    @Override
    public List<CategoryEntity> getAll(Long userId) {
        return categoryJpaRepository.findAllByUserId(userId);
    }

    @Override
    public CategoryEntity getById(Long id) {
        var categoryEntities = categoryJpaRepository.findById(id);
        if (categoryEntities.isEmpty()) {
            throw new NotFoundException("User not found with id: " + id);
        }
        return categoryEntities.get();
    }

    @Override
    @Transactional
    public List<CategoryEntity> saveCategoriesIfNotExists(List<String> categoryTitles) {

        // 1. Lấy tất cả các CategoryEntity hiện có trong DB với các title đã cho
        List<CategoryEntity> existingCategories = categoryJpaRepository.findAllByTitleIn(categoryTitles);

        // 2. Trích xuất các title của các CategoryEntity đã tồn tại
        Set<String> existingTitles = existingCategories.stream()
                .map(CategoryEntity::getTitle)
                .collect(Collectors.toSet());

        // 3. Lọc ra các categoryTitle chưa tồn tại trong DB
        List<String> newCategoryTitles = categoryTitles.stream()
                .filter(title -> !existingTitles.contains(title))
                .toList();

        // 4. Tạo các CategoryEntity mới từ các title chưa tồn tại
        List<CategoryEntity> newCategoryEntities = newCategoryTitles.stream()
                .map(title -> {
                    CategoryEntity newCategory = new CategoryEntity();
                    newCategory.setTitle(title);
                    return newCategory;
                })
                .collect(Collectors.toList());

        // 5. Lưu các CategoryEntity mới vào cơ sở dữ liệu
        List<CategoryEntity> savedNewCategories = categoryJpaRepository.saveAll(newCategoryEntities);

        // 6. Kết hợp danh sách các category đã tồn tại và các category mới được lưu
        // để trả về toàn bộ danh sách CategoryEntity đã được đảm bảo tồn tại trong DB
        existingCategories.addAll(savedNewCategories);

        return existingCategories;
    }

    @Override
    public CategoryEntity saveCategoryIfNotExists(String categoryTitle) {
        CategoryEntity existingCategory = categoryJpaRepository.findByTitle(categoryTitle).orElse(new CategoryEntity());
        if (existingCategory.getId() != null) {
            return existingCategory;
        }
        existingCategory.setTitle(categoryTitle);
        existingCategory.setUserId(1L);
        return categoryJpaRepository.save(existingCategory);
    }

    @Override
    public CategoryEntity save(CategoryEntity model) {
        var category = MapperUtils.map(model, CategoryEntity.class);
        return categoryJpaRepository.save(category);
    }

    @Override
    public void deleteById(Long id) {
        categoryJpaRepository.deleteById(id);
    }
}
