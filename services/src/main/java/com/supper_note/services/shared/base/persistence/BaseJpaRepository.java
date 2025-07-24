package com.supper_note.services.shared.base.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;
import java.util.Optional;

@NoRepositoryBean
public interface BaseJpaRepository<T, V> extends JpaRepository<T, V> {
    List<T> findAllByUserId(Long userId);
}
