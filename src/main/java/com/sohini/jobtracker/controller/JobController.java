package com.sohini.jobtracker.controller;

import com.sohini.jobtracker.model.Job;
import com.sohini.jobtracker.model.JobStatus;
import com.sohini.jobtracker.service.JobService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/jobs")
public class JobController {

    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    // ✅ Add Job with User
    @PostMapping("/user/{userId}")
    public Job addJob(@PathVariable Long userId,
                      @Valid @RequestBody Job job) {
        return jobService.addJob(userId, job);
    }

    // Get All Jobs (optional)
    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    // ✅ Get Jobs by User
    @GetMapping("/user/{userId}")
    public List<Job> getJobsByUser(@PathVariable Long userId) {
        return jobService.getJobsByUser(userId);
    }

    // Delete Job
    @DeleteMapping("/{id}")
    public String deleteJob(@PathVariable Long id) {
        return jobService.deleteJob(id);
    }

    // Update Job
    @PutMapping("/{id}")
    public Job updateJob(@PathVariable Long id, @Valid @RequestBody Job job) {
        return jobService.updateJob(id, job);
    }

    // Search
    @GetMapping("/search")
    public List<Job> searchByCompany(@RequestParam String company) {
        return jobService.searchByCompany(company);
    }

    // Filter
    @GetMapping("/status")
    public List<Job> filterByStatus(@RequestParam JobStatus status) {
        return jobService.filterByStatus(status);
    }
}