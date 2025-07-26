package com.supper_note.services.shared.base.application;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public interface BaseController<T> {
    @GetMapping
    List<T> getAll();

    @GetMapping("{id}")
    T getById(@PathVariable Long id);

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id);
}
