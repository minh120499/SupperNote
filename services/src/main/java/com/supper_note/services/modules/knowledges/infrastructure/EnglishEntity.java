package com.supper_note.services.modules.knowledges.infrastructure;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "Words")
@Getter
public class EnglishEntity {
    @Id
    private Long id;
    private String word;
}
