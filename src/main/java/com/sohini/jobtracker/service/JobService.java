package com.sohini.jobtracker.service;

import com.sohini.jobtracker.model.Job;
import com.sohini.jobtracker.model.JobStatus;
import com.sohini.jobtracker.model.User;
import com.sohini.jobtracker.repository.JobRepository;
import com.sohini.jobtracker.repository.UserRepository;
import com.sohini.jobtracker.exception.ResourceNotFoundException;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;
    private final UserRepository userRepository;

    public JobService(JobRepository jobRepository, UserRepository userRepository) {
        this.jobRepository = jobRepository;
        this.userRepository = userRepository;
    }

    // ✅ Add Job with User
    public Job addJob(Long userId, Job job) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        job.setUser(user);

        return jobRepository.save(job);
    }

    // Get All Jobs (optional: keep or remove later)
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // Get Job By ID
    public Job getJobById(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));
    }

    // Delete Job
    public String deleteJob(Long id) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

        jobRepository.delete(job);
        return "Job deleted successfully";
    }

    // Update Job
    public Job updateJob(Long id, Job updatedJob) {
        Job job = jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id: " + id));

        job.setCompany(updatedJob.getCompany());
        job.setRole(updatedJob.getRole());
        job.setStatus(updatedJob.getStatus());
        job.setAppliedDate(updatedJob.getAppliedDate());

        return jobRepository.save(job);
    }

    // Search
    public List<Job> searchByCompany(String company) {
        return jobRepository.findByCompanyContaining(company);
    }

    // Filter
    public List<Job> filterByStatus(JobStatus status) {
        return jobRepository.findByStatus(status);
    }

    // ✅ Get Jobs by User
    public List<Job> getJobsByUser(Long userId) {
        return jobRepository.findByUserId(userId);
    }
}