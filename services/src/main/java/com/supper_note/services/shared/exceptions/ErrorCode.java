package com.supper_note.services.shared.exceptions;

import lombok.Getter;

@Getter // Lombok để tạo getter tự động cho code và message
public enum ErrorCode {
    NOT_FOUND(404, "Not found"),

    // --- Common / Generic Errors ---
    INTERNAL_SERVER_ERROR(5000, "Internal Server Error"),
    UNAUTHORIZED(4010, "Unauthorized access"),
    FORBIDDEN(4030, "Access denied"),
    BAD_REQUEST(4000, "Bad Request"),
    VALIDATION_ERROR(4001, "Validation Failed"),

    // --- User related Errors ---
    USER_NOT_FOUND(4041, "User not found"),
    USER_ALREADY_EXISTS(4091, "User with this email already exists"),
    INVALID_CREDENTIALS(4011, "Invalid username or password"),

    // --- Note related Errors ---
    NOTE_NOT_FOUND(4042, "Note not found"),
    NOTE_ACCESS_DENIED(4031, "You do not have permission to access this note"),

    // --- Example Specific Errors ---
    PRODUCT_OUT_OF_STOCK(4002, "Product is out of stock"),
    ORDER_NOT_FOUND(4043, "Order not found");

    private final int code;
    private final String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
