package com.supper_note.services.modules.category.domain.service;

import com.supper_note.services.modules.category.domain.model.Category;
import org.springframework.stereotype.Service;

@Service
// thực hiện validate
public class CategoryDomainService {
    public boolean isValid(Category category) {
        return category.getType() != null;
    }
}
