package com.supper_note.services.modules.personalExpense.infrastructure.persistence;

import com.supper_note.services.modules.category.infrastructure.persistence.CategoryEntity;
import com.supper_note.services.shared.enums.ExpenseType;
import com.supper_note.services.shared.model.Auditable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "personal_expense")
@Getter
@Setter
public class PersonalExpenseEntity extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;

    private String title;
    private BigDecimal amount;
    @Enumerated(EnumType.STRING)
    private ExpenseType type;
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private CategoryEntity category;
}
