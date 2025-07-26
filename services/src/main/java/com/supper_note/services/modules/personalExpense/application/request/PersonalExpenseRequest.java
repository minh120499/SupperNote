package com.supper_note.services.modules.personalExpense.application.request;

import com.fasterxml.jackson.annotation.JsonRootName;
import com.supper_note.services.shared.enums.ExpenseType;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@JsonRootName("_")
public class PersonalExpenseRequest {
    private Long userId = 1L;
    private String title;
    private BigDecimal amount;
    private ExpenseType type;
    private String category;
    private String description;
}
