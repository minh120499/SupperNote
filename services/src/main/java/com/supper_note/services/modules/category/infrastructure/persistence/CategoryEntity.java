package com.supper_note.services.modules.category.infrastructure.persistence;

import com.supper_note.services.shared.enums.ExpenseType;
import com.supper_note.services.shared.model.Auditable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

import java.math.BigDecimal;

@Entity
@Table(name = "category")
@Getter
public class CategoryEntity extends Auditable {
    @Id
    private Long id;
    private Long userId;
    private String title;
    private String type;
    private String description;
}
