package com.supper_note.services.modules.category.interfaces.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.supper_note.services.modules.category.application.CategoryUseCase;
import com.supper_note.services.modules.category.application.dto.CategoryDTO;
import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.shared.exceptions.NotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CategoryController.class)
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private CategoryUseCase categoryUseCase;

    private Category category;
    private final Long userId = 1L; // This matches the hardcoded userId in CategoryController
    private final Long categoryId = 1L;

    @BeforeEach
    void setUp() {
        // Since we can't set fields directly on Category (only has getters),
        // we'll use mocking in the test methods
    }

    @Test
    @DisplayName("Should return all categories")
    void shouldReturnAllCategories() throws Exception {
        // Arrange
        List<Category> categories = Arrays.asList(new Category(), new Category());
        when(categoryUseCase.getAll(userId)).thenReturn(categories);

        // Act & Assert
        mockMvc.perform(get("/api/categories"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2)));

        verify(categoryUseCase).getAll(userId);
    }

    @Test
    @DisplayName("Should return a category by ID")
    void shouldReturnCategoryById() throws Exception {
        // Arrange
        Category mockCategory = mock(Category.class);
        when(mockCategory.getTitle()).thenReturn("Test Category");
        when(categoryUseCase.getById(categoryId)).thenReturn(mockCategory);

        // Act & Assert
        mockMvc.perform(get("/api/categories/{id}", categoryId))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.title", is("Test Category")));

        verify(categoryUseCase).getById(categoryId);
    }

    @Test
    @DisplayName("Should return 404 when category is not found")
    void shouldReturn404WhenCategoryIsNotFound() throws Exception {
        // Arrange
        when(categoryUseCase.getById(categoryId)).thenThrow(new NotFoundException("Category not found"));

        // Act & Assert
        mockMvc.perform(get("/api/categories/{id}", categoryId))
                .andExpect(status().isNotFound());

        verify(categoryUseCase).getById(categoryId);
    }

    @Test
    @DisplayName("Should save category")
    void shouldSaveCategory() throws Exception {
        // Arrange
        Category mockInputCategory = mock(Category.class);
        CategoryDTO mockOutputCategory = mock(CategoryDTO.class);
        when(mockOutputCategory.getTitle()).thenReturn("Saved Category");
        
        // Note: There's a potential issue in the controller - @RequestBody annotation is missing
        // This test might fail due to that issue
        when(categoryUseCase.save(any(CategoryDTO.class))).thenReturn(mockOutputCategory);

        // Act & Assert
        mockMvc.perform(post("/api/categories")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(mockInputCategory)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.title", is("Saved Category")));

        verify(categoryUseCase).save(any(CategoryDTO.class));
    }

    @Test
    @DisplayName("Should delete category")
    void shouldDeleteCategory() throws Exception {
        // Act & Assert
        mockMvc.perform(delete("/api/categories/{id}", categoryId))
                .andExpect(status().isOk());

        verify(categoryUseCase).deleteById(categoryId);
    }
}