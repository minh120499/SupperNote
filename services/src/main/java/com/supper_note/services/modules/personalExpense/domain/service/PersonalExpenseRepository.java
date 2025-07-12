package com.supper_note.services.modules.personalExpense.domain.service;

import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;

import java.util.List;

public interface PersonalExpenseRepository {
    List<PersonalExpense> findAllByUserId(Long userId);
}
