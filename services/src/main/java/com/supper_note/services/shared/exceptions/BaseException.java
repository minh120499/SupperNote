package com.supper_note.services.shared.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public abstract class BaseException extends RuntimeException {

    private final ErrorCode errorCode;
    private final HttpStatus httpStatus; // Mã trạng thái HTTP tương ứng
    private final String detailMessage; // Thông điệp chi tiết hơn (nếu có)

    protected BaseException(ErrorCode errorCode, HttpStatus httpStatus) {
        super(errorCode.getMessage()); // Gọi constructor của RuntimeException với thông điệp mặc định
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.detailMessage = errorCode.getMessage(); // Mặc định là thông điệp của ErrorCode
    }

    protected BaseException(ErrorCode errorCode, HttpStatus httpStatus, String detailMessage) {
        super(detailMessage != null ? detailMessage : errorCode.getMessage());
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.detailMessage = detailMessage != null ? detailMessage : errorCode.getMessage();
    }

    // Constructor để cho phép truyền nguyên nhân gốc (Throwable cause)
    protected BaseException(ErrorCode errorCode, HttpStatus httpStatus, String detailMessage, Throwable cause) {
        super(detailMessage != null ? detailMessage : errorCode.getMessage(), cause);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
        this.detailMessage = detailMessage != null ? detailMessage : errorCode.getMessage();
    }
}
