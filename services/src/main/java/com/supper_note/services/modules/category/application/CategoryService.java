package com.supper_note.services.modules.category.application;

import com.supper_note.services.modules.category.application.request.CategoryRequest;
import com.supper_note.services.modules.category.application.response.CategoryResponse;
import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.modules.category.domain.service.CategoryDomainService;
import com.supper_note.services.modules.category.domain.service.CategoryRepository;
import com.supper_note.services.modules.category.infrastructure.persistence.CategoryEntity;
import com.supper_note.services.shared.exceptions.NotFoundException;
import com.supper_note.services.shared.mapper.MapperUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryService implements CategoryUseCase {

    private final CategoryRepository categoryRepository;
    private final CategoryDomainService categoryDomainService;

    @Override
    public List<Category> getAll(Long userId) {
        List<CategoryEntity> categoryEntities = categoryRepository.getAll(userId);
        return MapperUtils.mapList(categoryEntities, Category.class);
    }

    @Override
    public Category getById(Long id) {
        CategoryEntity categoryEntity = categoryRepository.getById(id);
        return MapperUtils.map(categoryEntity, Category.class);
    }

    @Override
    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }

    public CategoryResponse save(CategoryRequest request) {
        if (categoryDomainService.isValid(request)) {
            throw new NotFoundException("Not found");
        }
        var category = MapperUtils.map(request, CategoryEntity.class);
        var entity = categoryRepository.save(category);
        return MapperUtils.map(entity, CategoryResponse.class);
    }

    public CategoryResponse save(String categoryTitle) {
        if (categoryTitle == null || categoryTitle.isBlank()) {
            throw new NotFoundException("Category Title not empty");
        }
        var entity = categoryRepository.saveCategoryIfNotExists(categoryTitle);
        return MapperUtils.map(entity, CategoryResponse.class);
    }

    public List<CategoryResponse> saveAll(List<String> categoryTitles) {
        List<CategoryEntity> categoryEntities = categoryRepository.saveCategoriesIfNotExists(categoryTitles);
        return MapperUtils.mapList(categoryEntities, CategoryResponse.class);
    }
}
