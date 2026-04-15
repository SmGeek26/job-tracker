import React from "react";

function Dashboard({
  user,
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
      {/* BIG MAIN HEADING */}
      <h1 style={mainHeading}>Welcome, {user.name} 👋</h1>

      <p style={subtext}>Track and manage your job applications</p>

      {/* ADD JOB FORM */}
      <h2 style={sectionHeading}>Add Job</h2>

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

// 🔥 BIGGEST HEADING
const mainHeading = {
  textAlign: "center",
  fontSize: "36px",
  fontWeight: "700",
  color: "#0f172a",
  marginBottom: "10px",
};

// SUBTEXT
const subtext = {
  textAlign: "center",
  color: "#475569",
  marginBottom: "25px",
};

// SECTION HEADING (TEAL)
const sectionHeading = {
  textAlign: "center",
  fontSize: "28px",
  fontWeight: "600",
  color: "#14b8a6",
  marginBottom: "15px",
};

// INPUT
const input = {
  display: "block",
  width: "100%",
  margin: "10px 0",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #cbd5f5",
};

// BUTTON
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

export default Dashboard;