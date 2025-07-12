package com.supper_note.services.modules.personalExpense.application;

import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;

import java.util.List;

public interface PersonalExpenseUseCase {
    List<PersonalExpense> getAllPersonalExpense();
}
