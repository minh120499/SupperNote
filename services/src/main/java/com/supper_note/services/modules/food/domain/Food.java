package com.supper_note.services.modules.food.domain;

import com.supper_note.services.shared.enums.BaseStatus;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Getter
public class Food {
    @Id
    private Long id;
    private String name;
    private String description;
    private String phoneNumber;
    private String email;
    private String website;
    private String imageUrl;
    private String facebook;
    private Date openingAt;
    private Date closedAt;
    private BigDecimal minPrice;
    private BigDecimal maxPrice;
    private BaseStatus status;
    private String note;
    private Date createdAt;
    private Date updatedAt;

    // address
    private String country;
    private String city;
    private String district;
    private String province;
    private String ward;
    private String address;
    private Long latitude;
    private Long longitude;
}
