package com.supper_note.services.modules.category.domain.service;

import com.supper_note.services.modules.category.application.dto.CategoryDTO;
import org.springframework.stereotype.Service;

@Service
// thực hiện validate
public class CategoryDomainService {
    public boolean isValid(CategoryDTO request) {
        return request.getTitle() != null;
    }
}
