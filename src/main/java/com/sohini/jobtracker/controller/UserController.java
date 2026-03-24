package com.sohini.jobtracker.controller;

import com.sohini.jobtracker.model.User;
import com.sohini.jobtracker.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // ✅ Register
    @PostMapping("/register")
    public User register(@Valid @RequestBody User user) {
        return userService.registerUser(user);
    }

    // ✅ Login
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return userService.loginUser(user.getEmail(), user.getPassword());
    }
}