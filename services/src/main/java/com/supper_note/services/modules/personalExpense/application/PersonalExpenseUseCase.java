package com.supper_note.services.modules.personalExpense.application;

import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface PersonalExpenseUseCase {
    List<PersonalExpense> getAllPersonalExpense();
    PersonalExpense savePersonalExpense(PersonalExpense personalExpense);
}
