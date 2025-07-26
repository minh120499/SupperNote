package com.supper_note.services.shared.exceptions;

import org.springframework.http.HttpStatus;

public class ValidationException extends BaseException {
    public ValidationException(String identifier) {
        super(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND, "Validation with identifier: " + identifier);
    }
}
