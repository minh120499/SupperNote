package com.supper_note.services.modules.category.domain.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Category {
    private Long id;
    private Long userId;
    private String title;
    private String type;
    private String description;
}
