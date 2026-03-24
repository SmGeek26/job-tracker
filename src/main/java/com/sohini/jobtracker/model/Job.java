package com.sohini.jobtracker.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String company;

    @NotBlank
    private String role;

    @Enumerated(EnumType.STRING)
    @NotNull
    private JobStatus status;

    @NotNull
    private LocalDate appliedDate;

    //Relationship with User
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Constructors
    public Job() {}

    public Job(String company, String role, JobStatus status, LocalDate appliedDate, User user) {
        this.company = company;
        this.role = role;
        this.status = status;
        this.appliedDate = appliedDate;
        this.user = user;
    }

    // Getters & Setters

    public Long getId() {
        return id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public JobStatus getStatus() {
        return status;
    }

    public void setStatus(JobStatus status) {
        this.status = status;
    }

    public LocalDate getAppliedDate() {
        return appliedDate;
    }

    public void setAppliedDate(LocalDate appliedDate) {
        this.appliedDate = appliedDate;
    }

    //User getters/setters
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}