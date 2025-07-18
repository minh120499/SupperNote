package com.supper_note.services.modules.personalExpense.infrastructure.persistence;

import com.supper_note.services.shared.enums.ExpenseType;
import com.supper_note.services.shared.model.Auditable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

import java.math.BigDecimal;

@Entity
@Table(name = "personal_expense")
@Getter
public class PersonalExpenseEntity extends Auditable {
    @Id
    private Long id;
    private Long userId;

    private String title;
    private BigDecimal amount;
    private ExpenseType type;
    private String category;
    private String description;
}
