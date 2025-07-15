package com.supper_note.services.modules.category.interfaces.rest;

import com.supper_note.services.modules.category.application.CategoryUseCase;
import com.supper_note.services.modules.category.domain.model.Category;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(("/api/categories"))
@AllArgsConstructor
public class CategoryController {
    private final CategoryUseCase categoryUseCase;

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryUseCase.getAllCategory();
    }


    @PostMapping
    public Category saveCategory(Category category) {
        return categoryUseCase.saveCategory(category);
    }
}
