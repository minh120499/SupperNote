package com.supper_note.services.modules.category.domain.service;

import com.supper_note.services.modules.category.application.request.CategoryRequest;
import org.springframework.stereotype.Service;

@Service
// thực hiện validate
public class CategoryDomainService {
    public boolean isValid(CategoryRequest request) {
        return request.getTitle() != null;
    }
}
