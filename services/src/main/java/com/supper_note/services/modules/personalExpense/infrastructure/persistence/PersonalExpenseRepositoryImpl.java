package com.supper_note.services.modules.personalExpense.infrastructure.persistence;

import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseRepository;
import com.supper_note.services.shared.exceptions.NotFoundException;
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
        var entity = personalExpenseJpaRepository.findById(id);
        if(entity.isEmpty()){
            throw  new NotFoundException("Personal Expense not found with id: " + id);
        }
        return MapperUtils.map(entity.get(), PersonalExpense.class);
    }

    @Override
    public PersonalExpense save(PersonalExpense model) {
        var request = MapperUtils.map(model, PersonalExpenseEntity.class);
        var entity = personalExpenseJpaRepository.save(request);
        return MapperUtils.map(entity, PersonalExpense.class)   ;
    }

    @Override
    public void deleteById(Long id) {
        personalExpenseJpaRepository.deleteById(id);
    }
}
