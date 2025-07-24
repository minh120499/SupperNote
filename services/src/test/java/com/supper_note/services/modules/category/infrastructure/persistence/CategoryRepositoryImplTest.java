package com.supper_note.services.modules.category.infrastructure.persistence;

import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.shared.exceptions.NotFoundException;
import com.supper_note.services.shared.mapper.MapperUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CategoryRepositoryImplTest {

    @Mock
    private CategoryJpaRepository categoryJpaRepository;

    @Mock
    private MapperUtils mapperUtils;

    @InjectMocks
    private CategoryRepositoryImpl categoryRepository;

    private CategoryEntity categoryEntity;
    private Category category;
    private final Long userId = 1L;
    private final Long categoryId = 1L;

    @BeforeEach
    void setUp() {
        // Since we're mocking MapperUtils, we don't need to set up real mapping
        categoryEntity = new CategoryEntity();
        category = new Category();
    }

    @Test
    @DisplayName("Should return all categories for a user")
    void shouldReturnAllCategoriesForUser() {
        // Arrange
        List<CategoryEntity> categoryEntities = Arrays.asList(categoryEntity, categoryEntity);
        List<Category> expectedCategories = Arrays.asList(category, category);
        
        when(categoryJpaRepository.findAllByUserId(userId)).thenReturn(categoryEntities);
        when(MapperUtils.mapList(categoryEntities, Category.class)).thenReturn(expectedCategories);

        // Act
        List<Category> actualCategories = categoryRepository.getAll(userId);

        // Assert
        assertEquals(expectedCategories, actualCategories);
        verify(categoryJpaRepository).findAllByUserId(userId);
    }

    @Test
    @DisplayName("Should return a category by ID for a user")
    void shouldReturnCategoryByIdForUser() {
        // Arrange
        when(categoryJpaRepository.findById(categoryId)).thenReturn(Optional.of(categoryEntity));
        when(MapperUtils.map(categoryEntity, Category.class)).thenReturn(category);

        // Act
        Category actualCategory = categoryRepository.getById(categoryId);

        // Assert
        assertEquals(category, actualCategory);
        verify(categoryJpaRepository).findById(userId, categoryId);
    }

    @Test
    @DisplayName("Should throw NotFoundException when category is not found")
    void shouldThrowNotFoundExceptionWhenCategoryIsNotFound() {
        // Arrange
        when(categoryJpaRepository.findById(categoryId)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(NotFoundException.class, () -> categoryRepository.getById(categoryId));
        verify(categoryJpaRepository).findById(categoryId);
    }

    @Test
    @DisplayName("Should save category")
    void shouldSaveCategory() {
        // Arrange
        when(MapperUtils.map(category, CategoryEntity.class)).thenReturn(categoryEntity);
        when(categoryJpaRepository.save(categoryEntity)).thenReturn(categoryEntity);
        when(MapperUtils.map(categoryEntity, Category.class)).thenReturn(category);

        // Act
        Category savedCategory = categoryRepository.save(category);

        // Assert
        assertEquals(category, savedCategory);
        verify(categoryJpaRepository).save(categoryEntity);
    }

    @Test
    @DisplayName("Should delete category by ID for a user")
    void shouldDeleteCategoryByIdForUser() {
        // Act
        categoryRepository.deleteById(categoryId);

        // Assert
        verify(categoryJpaRepository).deleteById(categoryId);
    }
}