package com.supper_note.services.modules.personalExpense.domain.model;

import com.supper_note.services.modules.category.domain.model.Category;
import com.supper_note.services.shared.enums.ExpenseType;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
public class PersonalExpense {
    private Long id;
    private Long userId;
    private String title;
    private BigDecimal amount;
    private ExpenseType type;
    private List<Category> categories;
    private String description;
}
