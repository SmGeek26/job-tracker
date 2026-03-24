package com.sohini.jobtracker.service;

import com.sohini.jobtracker.exception.EmailAlreadyExistsException;
import com.sohini.jobtracker.exception.InvalidCredentialsException;
import com.sohini.jobtracker.exception.ResourceNotFoundException;
import com.sohini.jobtracker.model.User;
import com.sohini.jobtracker.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // ✅ Register
    public User registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("Email already registered");
        }
        return userRepository.save(user);
    }

    // ✅ Login
    public User loginUser(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password"));

        if (!user.getPassword().equals(password)) {
            throw new InvalidCredentialsException("Invalid email or password");
        }

        return user;
    }

    // 🆕 UPDATE PROFILE
    public User updateUser(Long id, User updatedUser) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        user.setAddress(updatedUser.getAddress());
        user.setPhone(updatedUser.getPhone());
        user.setProfilePhoto(updatedUser.getProfilePhoto());
        user.setCv(updatedUser.getCv());

        return userRepository.save(user);
    }
}