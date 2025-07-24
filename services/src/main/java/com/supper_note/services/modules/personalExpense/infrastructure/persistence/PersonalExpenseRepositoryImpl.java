package com.supper_note.services.modules.personalExpense.infrastructure.persistence;

import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseRepository;
import com.supper_note.services.shared.mapper.MapperUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class PersonalExpenseRepositoryImpl implements PersonalExpenseRepository {
    private final PersonalExpenseJpaRepository personalExpenseJpaRepository;

    @Override
    public List<PersonalExpense> getAll(Long userId) {
        var personalExpenseEntities = personalExpenseJpaRepository.findAllByUserId(userId);
        return MapperUtils.mapList(personalExpenseEntities, PersonalExpense.class);
    }

    @Override
    public PersonalExpense getById(Long id) {
        return null;
    }

    @Override
    public PersonalExpense save(PersonalExpense model) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }
}
