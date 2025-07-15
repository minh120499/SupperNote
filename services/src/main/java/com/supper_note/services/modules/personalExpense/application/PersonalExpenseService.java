package com.supper_note.services.modules.personalExpense.application;

import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseDomainService;
import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PersonalExpenseService implements PersonalExpenseUseCase {

    private final PersonalExpenseRepository personalExpenseRepository;
    private final PersonalExpenseDomainService personalExpenseDomainService;

    @Override
    public List<PersonalExpense> getAllPersonalExpense() {
        return personalExpenseRepository.findAllByUserId(1L);
    }

    @Override
    public PersonalExpense savePersonalExpense(PersonalExpense personalExpense) {
        return null;
    }
}
