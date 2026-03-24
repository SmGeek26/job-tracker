package com.sohini.jobtracker.service;

import com.sohini.jobtracker.model.User;
import com.sohini.jobtracker.repository.UserRepository;
import com.sohini.jobtracker.exception.ResourceNotFoundException;
import com.sohini.jobtracker.exception.EmailAlreadyExistsException;
import com.sohini.jobtracker.exception.InvalidCredentialsException;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // ✅ Register User
    public User registerUser(User user) {

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            throw new EmailAlreadyExistsException("Email already registered");
        }

        return userRepository.save(user);
    }

    // ✅ Login User
    public User loginUser(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        if (!user.getPassword().equals(password)) {
            throw new InvalidCredentialsException("Invalid password");
        }

        return user;
    }
}