package com.sohini.jobtracker.service;

import com.sohini.jobtracker.exception.EmailAlreadyExistsException;
import com.sohini.jobtracker.exception.ResourceNotFoundException;
import com.sohini.jobtracker.model.User;
import com.sohini.jobtracker.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // ✅ REGISTER (ENCODE PASSWORD)
    public User registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("Email already registered");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    // ❌ REMOVE LOGIN METHOD (Spring handles it)

    // UPDATE PROFILE
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