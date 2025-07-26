package com.supper_note.services.modules.category.application.response;

import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonRootName("category")
public class CategoryResponse {
    private Long id;
    private Long userId;
    private String title;
    private String type;
    private String description;
}
