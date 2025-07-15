package com.supper_note.services.shared.base.application;

import com.supper_note.services.modules.category.domain.model.Category;

import java.util.List;

public interface BaseUseCase<T> {
    List<T> getAll();

    T save(T Category);
}
