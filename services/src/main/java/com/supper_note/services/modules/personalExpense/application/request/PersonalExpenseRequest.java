package com.supper_note.services.modules.personalExpense.application.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.List;

@Getter
public class PersonalExpenseRequest {
    private Long userId;
    @NotNull
    private String title;
    private BigDecimal amount;
    private String type;
    private List<String> categories;
    private String description;
}
