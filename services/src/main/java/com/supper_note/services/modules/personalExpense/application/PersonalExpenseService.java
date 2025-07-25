package com.supper_note.services.modules.personalExpense.application;

import com.supper_note.services.modules.personalExpense.application.dto.PersonalExpenseDTO;
import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseDomainService;
import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseRepository;
import com.supper_note.services.shared.mapper.MapperUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PersonalExpenseService implements PersonalExpenseUseCase {

    private final PersonalExpenseRepository personalExpenseRepository;
    private final PersonalExpenseDomainService personalExpenseDomainService;

    @Override
    public List<PersonalExpense> getAll(Long userId) {
        var personalExpenses = personalExpenseRepository.getAll(userId);
        return MapperUtils.mapList(personalExpenses, PersonalExpense.class);
    }

    @Override
    public PersonalExpense getById(Long id) {
        return personalExpenseRepository.getById(id);
    }

    @Override
    public PersonalExpenseDTO save(PersonalExpenseDTO request) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }
}
