import React from "react";

function AddJob({
  company,
  role,
  status,
  date,
  setCompany,
  setRole,
  setStatus,
  setDate,
  addJob,
}) {
  return (
    <div>
      <h2 style={heading}>Add Job</h2>

      <input
        value={company}
        style={input}
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        value={role}
        style={input}
        placeholder="Role"
        onChange={(e) => setRole(e.target.value)}
      />

      <select
        style={input}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>APPLIED</option>
        <option>INTERVIEW</option>
        <option>REJECTED</option>
        <option>OFFER</option>
      </select>

      <input
        type="date"
        style={input}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button style={btn} onClick={addJob}>
        Add Job
      </button>
    </div>
  );
}

const heading = {
  textAlign: "center",
  fontSize: "28px", // increased
  fontWeight: "600",
  color: "#14b8a6", // teal
  marginBottom: "20px",
};

const input = {
  display: "block",
  width: "100%",
  margin: "10px 0",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #cbd5f5",
  fontSize: "14px",
};

const btn = {
  display: "block",
  margin: "15px auto",
  background: "#2563eb",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default AddJob;