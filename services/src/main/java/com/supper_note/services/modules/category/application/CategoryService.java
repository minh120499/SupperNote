package com.supper_note.services.modules.category.application;

import com.supper_note.services.modules.category.application.dto.CategoryDTO;
import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.modules.category.domain.service.CategoryDomainService;
import com.supper_note.services.modules.category.domain.service.CategoryRepository;
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
        return categoryRepository.getAll(userId);
    }

    @Override
    public Category getById(Long id) {
        return categoryRepository.getById(id);
    }

    @Override
    public CategoryDTO save(CategoryDTO request) {
        if (categoryDomainService.isValid(request)) {
            throw new NotFoundException("Not found");
        }
        var category = MapperUtils.map(request, Category.class);
        var entity = categoryRepository.save(category);
        return MapperUtils.map(entity, CategoryDTO.class);
    }

    @Override
    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }
}
