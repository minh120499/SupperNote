package com.supper_note.services.modules.personalExpense.interfaces.rest;

import com.supper_note.services.modules.personalExpense.application.PersonalExpenseUseCase;
import com.supper_note.services.modules.personalExpense.application.dto.PersonalExpenseDTO;
import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import com.supper_note.services.shared.base.application.BaseController;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(("/api/personal_expense"))
@AllArgsConstructor
public class PersonalExpenseController implements BaseController<PersonalExpense, PersonalExpenseDTO> {
    private final PersonalExpenseUseCase personalExpenseUseCase;


    @Override
    public List<PersonalExpense> getAll() {
        return personalExpenseUseCase.getAll(1L);
    }

    @Override
    public PersonalExpense getById(Long id) {
        return personalExpenseUseCase.getById(id);
    }

    @Override
    public PersonalExpenseDTO save(PersonalExpenseDTO request) {
        return personalExpenseUseCase.save(request);
    }

    @Override
    public void delete(Long id) {
        personalExpenseUseCase.deleteById(id);
    }
}
