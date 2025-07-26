package com.supper_note.services.modules.personalExpense.domain.service;

import com.supper_note.services.modules.personalExpense.application.request.PersonalExpenseRequest;
import com.supper_note.services.shared.exceptions.ValidationException;
import org.springframework.stereotype.Service;

@Service
// thực hiện validate
public class PersonalExpenseDomainService {
    public void isValid(PersonalExpenseRequest request) {
        if (request.getCategory() == null) {
            throw new ValidationException("Title must not be null");
        }
    }
}
