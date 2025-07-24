package com.supper_note.services.modules.category.infrastructure.persistence;

import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.modules.category.domain.service.CategoryRepository;
import com.supper_note.services.shared.exceptions.NotFoundException;
import com.supper_note.services.shared.mapper.MapperUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

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
}
