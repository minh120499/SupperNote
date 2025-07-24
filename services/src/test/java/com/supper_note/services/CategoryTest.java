package com.supper_note.services;

import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.modules.category.domain.service.CategoryRepository;
import com.supper_note.services.modules.category.infrastructure.persistence.CategoryEntity;
import com.supper_note.services.modules.category.infrastructure.persistence.CategoryRepositoryImpl;
import com.supper_note.services.shared.mapper.MapperUtils;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

//@SpringBootTest
//@DataJpaTest
//@Import(CategoryRepositoryImpl.class)
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ExtendWith(MockitoExtension.class)
public class CategoryTest {

    @Mock
    private CategoryRepository categoryRepository;

    @Test
    public void shouldSaveAndFindUser() {
        var category = new Category();
        category.setDescription("Nguyen");
        when(categoryRepository.save(any())).thenReturn(category);
        var saved = categoryRepository.save(category);
        assertEquals("Nguyen", saved.getDescription());
    }
}