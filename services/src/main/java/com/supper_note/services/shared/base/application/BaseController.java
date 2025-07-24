package com.supper_note.services.shared.base.application;

import com.supper_note.services.modules.category.domain.model.Category;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public interface BaseController<T> {
    @GetMapping
    List<T> getAll();

    @GetMapping("{id}")
    T getById(@PathVariable Long id);

    @PostMapping
    T save(@RequestBody T category);

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id);
}
