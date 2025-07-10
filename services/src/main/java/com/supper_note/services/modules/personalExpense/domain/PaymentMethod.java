package com.supper_note.services.modules.personalExpense.domain;

import com.supper_note.services.shared.enums.PaymentType;
import com.supper_note.services.shared.model.Auditable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class PaymentMethod extends Auditable {
    @Id
    private Long id;
    private Long userId;

    private String name;
    private PaymentType type;
}
