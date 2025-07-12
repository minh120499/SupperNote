package com.supper_note.services.modules.personalExpense.infrastructure.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonalExpenseJpaRepository extends JpaRepository<PersonalExpenseEntity, Long> {
    List<PersonalExpenseEntity> findAllByUserId(Long userId);
}
