package com.supper_note.services.modules.category.application;

import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.modules.category.domain.service.CategoryDomainService;
import com.supper_note.services.modules.category.domain.service.CategoryRepository;
import com.supper_note.services.shared.exceptions.NotFoundException;
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
        return categoryRepository.getAll(userId);
    }

    @Override
    public Category getById(Long userId, Long id) {
        return categoryRepository.getById(userId, id);
    }

    @Override
    public Category save(Category category) {
        if (categoryDomainService.isValid(category)) {
            throw new NotFoundException("Not found");
        }
        return categoryRepository.save(category);
    }

    @Override
    public void deleteById(Long userId, Long id) {
        categoryRepository.deleteById(userId, id);
    }
}
