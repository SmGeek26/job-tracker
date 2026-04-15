import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const BASE_URL = "https://job-tracker-backend-5xka.onrender.com";

function JobList({ jobs, getJobs }) {
  const [filter, setFilter] = useState("ALL");

  // 🗑️ DELETE FUNCTION
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${BASE_URL}/jobs/${id}`, {
        method: "DELETE"
      });

      if (res.ok) {
        getJobs(); // ✅ reload jobs after delete
      } else {
        alert("Failed to delete job");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ FILTER LOGIC (same as before)
  const filteredJobs =
    filter === "ALL"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  return (
    <div>
      <h2 style={heading}>My Jobs</h2>

      {/* ✅ KEEP YOUR BUTTON (WORKING SYSTEM) */}
      <button style={btn} onClick={getJobs}>
        Load Jobs
      </button>

      {/* FILTER */}
      <div style={{ margin: "15px 0", textAlign: "center" }}>
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="ALL">All</option>
          <option value="APPLIED">Applied</option>
          <option value="INTERVIEW">Interview</option>
          <option value="REJECTED">Rejected</option>
          <option value="OFFER">Offer</option>
        </select>
      </div>

      {/* JOB LIST */}
      {filteredJobs.map((job) => (
        <div key={job.id} style={jobCard}>

          {/* 🗑️ DELETE ICON */}
          <div
            style={deleteWrapper}
            onClick={() => handleDelete(job.id)}
          >
            <FaTrash style={deleteIcon} />
          </div>

          <h3>{job.company}</h3>
          <p>{job.role}</p>
          <p>{job.status}</p>

        </div>
      ))}
    </div>
  );
}

export default JobList;

/////////////////////////////////////////////////////
// 🎨 ORIGINAL STYLES (UNCHANGED)

const heading = {
  textAlign: "center",
  fontSize: "28px",
  fontWeight: "600",
  color: "#14b8a6",
  marginBottom: "15px",
};

const jobCard = {
  position: "relative",
  background: "#ffffff",
  padding: "15px",
  margin: "12px 0",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  borderLeft: "5px solid #14b8a6",
};

const btn = {
  display: "block",
  margin: "10px auto",
  background: "#2563eb",
  color: "white",
  padding: "8px 15px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const deleteWrapper = {
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer"
};

const deleteIcon = {
  color: "red",
};