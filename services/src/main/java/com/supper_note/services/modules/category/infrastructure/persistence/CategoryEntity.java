package com.supper_note.services.modules.category.infrastructure.persistence;

import com.supper_note.services.modules.personalExpense.infrastructure.persistence.PersonalExpenseEntity;
import com.supper_note.services.shared.model.Auditable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "category")
@Getter
@Setter
public class CategoryEntity extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String title;
    private String type;
    private String description;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PersonalExpenseEntity> expenses;
}
