package com.supper_note.services.modules.personalExpense.infrastructure.persistence;

import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseRepository;
import com.supper_note.services.shared.exceptions.NotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class PersonalExpenseRepositoryImpl implements PersonalExpenseRepository {
    private final PersonalExpenseJpaRepository personalExpenseJpaRepository;

    @Override
    public List<PersonalExpenseEntity> getAll(Long userId) {
        return personalExpenseJpaRepository.findAllByUserId(userId);
    }

    @Override
    public PersonalExpenseEntity getById(Long id) {
        var entity = personalExpenseJpaRepository.findById(id);
        if (entity.isEmpty()) {
            throw new NotFoundException("Personal Expense not found with id: " + id);
        }
        return entity.get();
    }

    @Override
    public PersonalExpenseEntity save(PersonalExpenseEntity model) {
        return personalExpenseJpaRepository.save(model);
    }

    @Override
    public void deleteById(Long id) {
        personalExpenseJpaRepository.deleteById(id);
    }
}
