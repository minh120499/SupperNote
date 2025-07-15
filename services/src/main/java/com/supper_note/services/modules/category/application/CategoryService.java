package com.supper_note.services.modules.category.application;

import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.modules.category.domain.service.CategoryDomainService;
import com.supper_note.services.modules.category.domain.service.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoryService implements CategoryUseCase {

    private final CategoryRepository categoryRepository;
    private final CategoryDomainService CategoryDomainService;

    @Override
    public List<Category> getAll() {
        return List.of();
    }

    @Override
    public Category save(Category Category) {
        return null;
    }
}
