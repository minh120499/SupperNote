package com.supper_note.services.modules.category.model;

import com.supper_note.services.shared.enums.CategoryType;
import com.supper_note.services.shared.model.Auditable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Category extends Auditable {
    @Id
    private Long id;
    private String title;
    private String description;
    private CategoryType type;
}
