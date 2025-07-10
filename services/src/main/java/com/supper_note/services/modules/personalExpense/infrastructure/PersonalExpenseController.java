package com.supper_note.services.modules.personalExpense.infrastructure;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(("/api/personal_expense"))
public class PersonalExpenseController {
    @GetMapping
    public List<Integer> getPersonalExpense() {
        List<Integer> result = new ArrayList<>();
        result.add(1);
        result.add(1);
        result.add(1);
        result.add(1);
        return result;
    }

    @GetMapping("/json-string-alt")
    @ResponseBody // Đảm bảo phương thức này trả về dữ liệu trực tiếp, không phải view
    public String getJsonString() {
        return "{\"anotherMessage\": \"This is an alternative way!\"}";
    }
}
