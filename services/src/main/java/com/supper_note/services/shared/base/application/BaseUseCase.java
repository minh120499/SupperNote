package com.supper_note.services.shared.base.application;

import java.util.List;

public interface BaseUseCase<T, K> {
    List<T> getAll(Long userId);

    T getById(Long id);

    K  save(K request);

    void deleteById(Long id);
}
