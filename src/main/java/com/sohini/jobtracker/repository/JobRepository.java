package com.sohini.jobtracker.repository;

import com.sohini.jobtracker.model.Job;
import com.sohini.jobtracker.model.JobStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

    // 🔍 Search by company
    List<Job> findByCompanyContaining(String company);

    // 🔍 Filter by status
    List<Job> findByStatus(JobStatus status);

     // 🔍 Filter by user ID
    List<Job> findByUserId(Long userId);
}