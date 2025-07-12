package com.supper_note.services.modules.personalExpense.infrastructure.persistence;

import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import com.supper_note.services.modules.personalExpense.domain.service.PersonalExpenseRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class PersonalExpenseRepositoryImpl implements PersonalExpenseRepository {
    private final PersonalExpenseJpaRepository personalExpenseJpaRepository;

    @Override
    public List<PersonalExpense> findAllByUserId(Long userId) {
        var a = personalExpenseJpaRepository.findAllByUserId(userId);
//        mapper data ở đây
        return null;
    }
}
