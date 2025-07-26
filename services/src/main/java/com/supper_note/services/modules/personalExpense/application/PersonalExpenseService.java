package com.supper_note.services.modules.personalExpense.application;

import com.supper_note.services.modules.category.application.CategoryService;
import com.supper_note.services.modules.category.application.response.CategoryResponse;
import com.supper_note.services.modules.category.infrastructure.persistence.CategoryEntity;
import com.supper_note.services.modules.personalExpense.application.request.PersonalExpenseRequest;
import com.supper_note.services.modules.personalExpense.application.response.PersonalExpenseResponse;
import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseDomainService;
import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseRepository;
import com.supper_note.services.modules.personalExpense.infrastructure.persistence.PersonalExpenseEntity;
import com.supper_note.services.shared.mapper.MapperUtils;
import jakarta.transaction.Transactional;
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
        return MapperUtils.map(personalExpenseRepository.getById(id), PersonalExpense.class);
    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    @Transactional
    public PersonalExpenseResponse save(PersonalExpenseRequest request) {
        personalExpenseDomainService.isValid(request);
        CategoryResponse categoryResponse = categoryService.save(request.getCategory());
        PersonalExpenseEntity personalExpenseEntity = MapperUtils.map(request, PersonalExpenseEntity.class);
        personalExpenseEntity.setCategory(MapperUtils.map(categoryResponse, CategoryEntity.class));
        personalExpenseEntity = personalExpenseRepository.save(personalExpenseEntity);
        return MapperUtils.map(personalExpenseEntity, PersonalExpenseResponse.class);
    }
}
