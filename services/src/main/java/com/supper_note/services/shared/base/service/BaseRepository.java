package com.supper_note.services.shared.base.service;

import java.util.List;

public interface BaseRepository<T> {
    List<T> getAllByUserId(Long userId);

    T save(T model);
}
