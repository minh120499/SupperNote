package com.supper_note.services.modules.personalExpense.application.dto;

import com.supper_note.services.modules.category.application.dto.CategoryDTO;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.List;

@Getter
public class PersonalExpenseDTO {
    private Long userId;
    private String title;
    private BigDecimal amount;
    private String type;
    private List<CategoryDTO> category;
    private String description;
}
