package com.supper_note.services.shared.exceptions;

import org.springframework.http.HttpStatus;

public class NotFoundException extends BaseException {
    public NotFoundException(String identifier) {
        super(ErrorCode.NOT_FOUND, HttpStatus.NOT_FOUND, "Not found with identifier: " + identifier);
    }
}
