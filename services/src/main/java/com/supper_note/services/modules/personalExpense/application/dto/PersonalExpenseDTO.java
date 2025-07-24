package com.supper_note.services.modules.personalExpense.application.dto;

import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class PersonalExpenseDTO {
    private Long userId;
    private String title;
    private BigDecimal amount;
    private String type;
    private String category;
    private String description;
}
