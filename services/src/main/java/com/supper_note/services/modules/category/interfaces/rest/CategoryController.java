package com.supper_note.services.modules.category.interfaces.rest;

import com.supper_note.services.modules.category.application.CategoryUseCase;
import com.supper_note.services.modules.category.domain.model.Category;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(("/api/categories"))
@AllArgsConstructor
public class CategoryController {
    private final CategoryUseCase categoryUseCase;
    private final Long userId = 1L;

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryUseCase.getAll(userId);
    }

    @GetMapping("{id}")
    public Category getById(@PathVariable Long id) {
        return categoryUseCase.getById(userId, id);
    }

    @PostMapping
    public Category saveCategory(Category category) {
        return categoryUseCase.save(category);
    }

    @DeleteMapping("{id}")
    public void deleteCategory(@PathVariable Long id) {
        categoryUseCase.deleteById(userId, id);
    }
}
