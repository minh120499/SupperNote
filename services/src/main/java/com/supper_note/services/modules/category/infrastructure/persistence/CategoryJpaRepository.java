package com.supper_note.services.modules.category.infrastructure.persistence;

import com.supper_note.services.shared.base.persistence.BaseJpaRepository;

import java.util.List;
import java.util.Optional;


public interface CategoryJpaRepository extends BaseJpaRepository<CategoryEntity, Long> {
    List<CategoryEntity> findAllByTitleIn(List<String> titles);

    Optional<CategoryEntity> findByTitle(String title);
}
