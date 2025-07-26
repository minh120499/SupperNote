package com.supper_note.services.modules.category.domain.service;

import com.supper_note.services.modules.category.infrastructure.persistence.CategoryEntity;
import com.supper_note.services.shared.base.service.BaseRepository;

import java.util.List;

public interface CategoryRepository extends BaseRepository<CategoryEntity> {
    List<CategoryEntity> saveCategoriesIfNotExists(List<String> categoryTitles);
    CategoryEntity saveCategoryIfNotExists(String categoryTitle);
}
