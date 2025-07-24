package com.supper_note.services.modules.personalExpense.domain.model;

import com.supper_note.services.shared.enums.PaymentType;
import com.supper_note.services.shared.model.Auditable;
import jakarta.persistence.*;

@Entity
@Table
public class PaymentMethod extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;

    private String name;
    private PaymentType type;
}
