package com.supper_note.services.modules.personalExpense.application;

import com.supper_note.services.modules.personalExpense.application.dto.PersonalExpenseDTO;
import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import com.supper_note.services.shared.base.application.BaseUseCase;

public interface PersonalExpenseUseCase extends BaseUseCase<PersonalExpense, PersonalExpenseDTO> {
}
