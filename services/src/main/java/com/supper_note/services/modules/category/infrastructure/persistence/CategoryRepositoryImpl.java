package com.supper_note.services.modules.category.infrastructure.persistence;

import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.modules.category.domain.service.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class CategoryRepositoryImpl implements CategoryRepository {
    private final CategoryJpaRepository categoryJpaRepository;

    @Override
    public List<Category> getAllByUserId(Long userId) {
        var a =  categoryJpaRepository.findAllByUserId(userId);
        return categoryJpaRepository.findAllByUserId(userId);
    }

    @Override
    public Category save(Category model) {
        return null;
    }
}
