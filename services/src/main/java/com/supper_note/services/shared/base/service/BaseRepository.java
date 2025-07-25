package com.supper_note.services.shared.base.service;

import java.util.List;

public interface BaseRepository<T> {
    List<T> getAll(Long userId);

    T getById(Long id);

    T save(T model);

    void deleteById(Long id);
}
