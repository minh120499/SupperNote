package com.supper_note.services.shared.base.application;

import java.util.List;

public interface BaseUseCase<T> {
    List<T> getAll(Long userId);

    T getById(Long id);

    T save(T Category);

    void deleteById(Long id);
}
