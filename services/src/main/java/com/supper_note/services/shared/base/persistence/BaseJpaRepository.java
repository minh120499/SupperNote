package com.supper_note.services.shared.base.persistence;

import com.supper_note.services.modules.category.infrastructure.persistence.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BaseJpaRepository<T, V> extends JpaRepository<T, V> {
    List<T> findAllByUserId(Long userId);
}
