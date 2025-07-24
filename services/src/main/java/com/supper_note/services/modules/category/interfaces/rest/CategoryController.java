package com.supper_note.services.modules.category.interfaces.rest;

import com.supper_note.services.modules.category.application.CategoryUseCase;
import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.shared.base.application.BaseController;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(("/api/categories"))
@AllArgsConstructor
public class CategoryController implements BaseController<Category> {
    private final CategoryUseCase categoryUseCase;

    @Override
    public List<Category> getAll() {
        Long userId = 1L;
        return categoryUseCase.getAll(userId);
    }

    @Override
    public Category getById(Long id) {
        return categoryUseCase.getById(id);
    }

    @Override
    public Category save(Category category) {
        return categoryUseCase.save(category);
    }

    @Override
    public void delete(Long id) {
        categoryUseCase.deleteById(id);
    }
}
