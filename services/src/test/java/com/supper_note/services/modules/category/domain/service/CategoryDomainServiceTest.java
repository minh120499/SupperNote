package com.supper_note.services.modules.category.domain.service;

import com.supper_note.services.modules.category.domain.model.Category;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CategoryDomainServiceTest {

    @InjectMocks
    private CategoryDomainService categoryDomainService;

    @Mock
    private Category category;

    @Test
    @DisplayName("Should return true when category type is not null")
    void shouldReturnTrueWhenCategoryTypeIsNotNull() {
        // Arrange
        when(category.getType()).thenReturn("EXPENSE");

        // Act
        boolean result = categoryDomainService.isValid(category);

        // Assert
        assertTrue(result);
    }

    @Test
    @DisplayName("Should return false when category type is null")
    void shouldReturnFalseWhenCategoryTypeIsNull() {
        // Arrange
        when(category.getType()).thenReturn(null);

        // Act
        boolean result = categoryDomainService.isValid(category);

        // Assert
        assertFalse(result);
    }
}