package com.supper_note.services.modules.personalExpense.application.response;

import com.fasterxml.jackson.annotation.JsonRootName;
import com.supper_note.services.modules.category.application.response.CategoryResponse;
import com.supper_note.services.modules.category.domain.model.Category;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@JsonRootName("personal_expense")
public class PersonalExpenseResponse {
    private Long id;
    private Long userId;
    private String title;
    private BigDecimal amount;
    private String type;
    private CategoryResponse category;
    private String description;
}
