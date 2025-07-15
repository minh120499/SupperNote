package com.supper_note.services.modules.personalExpense.interfaces.rest;

import com.supper_note.services.modules.personalExpense.application.PersonalExpenseUseCase;
import com.supper_note.services.modules.personalExpense.domain.model.PersonalExpense;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(("/api/personal_expense"))
@AllArgsConstructor
public class PersonalExpenseController {
    private final PersonalExpenseUseCase personalExpenseUseCase;

    @GetMapping
    public List<PersonalExpense> getPersonalExpense() {
        return personalExpenseUseCase.getAllPersonalExpense();
    }

    @GetMapping("/json-string-alt")
    @ResponseBody // Đảm bảo phương thức này trả về dữ liệu trực tiếp, không phải view
    public String getJsonString() {
        return "{\"anotherMessage\": \"This is an alternative way!\"}";
    }
}
