package com.supper_note.services.modules.category.infrastructure.persistence;

import com.supper_note.services.shared.model.Auditable;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "category")
@Getter
public class CategoryEntity extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String title;
    private String type;
    private String description;
}
