package com.supper_note.services.modules.personalExpense.domain.model;

import com.supper_note.services.shared.enums.ExpenseType;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class PersonalExpense {
    private Long id;
    private Long userId;
    private String title;
    private BigDecimal amount;
    private ExpenseType type;
    private String category;
    private String description;
}
