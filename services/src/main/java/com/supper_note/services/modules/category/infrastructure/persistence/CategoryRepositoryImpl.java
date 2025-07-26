package com.supper_note.services.modules.category.infrastructure.persistence;

import com.supper_note.services.modules.category.domain.model.Category;
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
    public List<Category> getAll(Long userId) {
        var categoryEntities = categoryJpaRepository.findAllByUserId(userId);
        return MapperUtils.mapList(categoryEntities, Category.class);
    }

    @Override
    public Category getById(Long id) {
        var categoryEntities = categoryJpaRepository.findById(id);
        if (categoryEntities.isEmpty()) {
            throw new NotFoundException("User not found with id: " + id);
        }
        return MapperUtils.map(categoryEntities.get(), Category.class);
    }

    @Override
    public Category save(Category model) {
        var category = MapperUtils.map(model, CategoryEntity.class);
        var categoryEntity = categoryJpaRepository.save(category);
        return MapperUtils.map(categoryEntity, Category.class);
    }

    @Override
    public void deleteById(Long id) {
        categoryJpaRepository.deleteById(id);
    }

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
                .collect(Collectors.toList());

        // 4. Tạo các CategoryEntity mới từ các title chưa tồn tại
        List<CategoryEntity> newCategoryEntities = newCategoryTitles.stream()
                .map(title -> {
                    CategoryEntity newCategory = new CategoryEntity();
                    // Lưu ý: Bạn cần set thêm userId, type, description nếu cần
//                    newCategory.setUserId(userId); // Giả sử userId được truyền vào hoặc lấy từ ngữ cảnh
//                    newCategory.setTitle(title);
                    // newCategory.setType("default_type"); // Set giá trị mặc định nếu cần
                    // newCategory.setDescription("default_description"); // Set giá trị mặc định nếu cần
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
}
