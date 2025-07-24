package com.supper_note.services.modules.category.application;

import com.supper_note.services.modules.category.application.dto.CategoryDTO;
import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.modules.category.domain.service.CategoryDomainService;
import com.supper_note.services.modules.category.domain.service.CategoryRepository;
import com.supper_note.services.shared.exceptions.NotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CategoryServiceTest {

    @Mock
    private CategoryRepository categoryRepository;

    @Mock
    private CategoryDomainService categoryDomainService;

    @InjectMocks
    private CategoryService categoryService;

    private Category category;
    private CategoryDTO categoryDTO;
    private final Long userId = 1L;
    private final Long categoryId = 1L;

    @BeforeEach
    void setUp() {
        category = new Category();
        // Set necessary fields for testing
        // Note: We can't set fields directly because Category only has getters
        // This is a limitation in the current design
    }

    @Test
    @DisplayName("Should return all categories for a user")
    void shouldReturnAllCategoriesForUser() {
        // Arrange
        List<Category> expectedCategories = Arrays.asList(new Category(), new Category());
        when(categoryRepository.getAll(userId)).thenReturn(expectedCategories);

        // Act
        List<Category> actualCategories = categoryService.getAll(userId);

        // Assert
        assertEquals(expectedCategories, actualCategories);
        verify(categoryRepository).getAll(userId);
    }

    @Test
    @DisplayName("Should return a category by ID for a user")
    void shouldReturnCategoryByIdForUser() {
        // Arrange
        when(categoryRepository.getById(categoryId)).thenReturn(category);

        // Act
        Category actualCategory = categoryService.getById(categoryId);

        // Assert
        assertEquals(category, actualCategory);
        verify(categoryRepository).getById(categoryId);
    }

    @Test
    @DisplayName("Should throw NotFoundException when category is valid - BUG")
    void shouldThrowNotFoundExceptionWhenCategoryIsValid() {
        // Arrange
        when(categoryDomainService.isValid(categoryDTO)).thenReturn(true);

        // Act & Assert
        assertThrows(NotFoundException.class, () -> categoryService.save(categoryDTO));
        verify(categoryDomainService).isValid(categoryDTO);
        verify(categoryRepository, never()).save(any(Category.class));
    }

    @Test
    @DisplayName("Should save category when category is invalid - EXPECTED BEHAVIOR IF BUG IS FIXED")
    void shouldSaveCategoryWhenCategoryIsInvalid() {
        // Arrange
        when(categoryDomainService.isValid(categoryDTO)).thenReturn(false);
        when(categoryRepository.save(category)).thenReturn(category);

        // Act
        Category savedCategory = categoryService.save(categoryDTO);

        // Assert
        assertEquals(category, savedCategory);
        verify(categoryDomainService).isValid(categoryDTO);
        verify(categoryRepository).save(category);
    }

    @Test
    @DisplayName("Should delete category by ID for a user")
    void shouldDeleteCategoryByIdForUser() {
        // Act
        categoryService.deleteById(categoryId);

        // Assert
        verify(categoryRepository).deleteById(categoryId);
    }
}