package com.supper_note.services.modules.personalExpense.application;

import com.supper_note.services.modules.category.application.CategoryService;
import com.supper_note.services.modules.personalExpense.application.request.PersonalExpenseRequest;
import com.supper_note.services.modules.personalExpense.application.response.PersonalExpenseResponse;
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
    private final CategoryService categoryService;
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
    public void deleteById(Long id) {

    }

    @Override
    public PersonalExpenseResponse save(PersonalExpenseRequest request) {

        return null;
    }
}
