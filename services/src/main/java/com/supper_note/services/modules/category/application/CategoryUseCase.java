package com.supper_note.services.modules.category.application;

import com.supper_note.services.modules.category.application.request.CategoryRequest;
import com.supper_note.services.modules.category.application.response.CategoryResponse;
import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.shared.base.application.BaseUseCase;


public interface CategoryUseCase extends BaseUseCase<Category> {
    CategoryResponse save (CategoryRequest request);
}
