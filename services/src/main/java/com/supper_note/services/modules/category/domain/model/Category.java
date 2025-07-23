package com.supper_note.services.modules.category.domain.model;

import lombok.Getter;

@Getter
public class Category {
    private Long userId;
    private String title;
    private String type;
    private String description;
}
