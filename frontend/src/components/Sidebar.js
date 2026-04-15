import React from "react";
import logoImg from "../assets/goal.png"; // ✅ your image

function Sidebar({ setPage, logout, user }) {
  return (
    <div style={sidebar}>
      <div>
        {/* LOGO + TITLE */}
        <div style={logoContainer}>
          <img src={logoImg} alt="logo" style={logoImgStyle} />

          <div>
            <h2 style={logoText}>Career Tracker</h2>
            <p style={tagline}>
              One application closer to your goal 🚀
            </p>
          </div>
        </div>

        {/* MENU */}
        <div style={menuContainer}>
          <p style={menuItem} onClick={() => setPage("dashboard")}>
            📊 Dashboard
          </p>

          <p style={menuItem} onClick={() => setPage("jobs")}>
            💼 My Jobs
          </p>

          <p style={menuItem} onClick={() => setPage("add")}>
            ➕ Add Job
          </p>
        </div>
      </div>

      {/* PROFILE + LOGOUT */}
      <div>
        <div style={profileCard} onClick={() => setPage("profile")}>
          <p style={{ fontWeight: "bold" }}>👤 View Profile</p>
        </div>

        <p style={logoutBtn} onClick={logout}>
          🚪 Logout
        </p>
      </div>
    </div>
  );
}

// SIDEBAR BASE
const sidebar = {
  width: "240px",
  height: "100vh",
  background: "#0f172a",
  color: "white",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

// LOGO CONTAINER
const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "25px",
};

// LOGO IMAGE (adjusted for your image)
const logoImgStyle = {
  width: "42px",
  height: "42px",
  objectFit: "contain",
  borderRadius: "6px",

  // ✨ subtle glow
  boxShadow: "0 0 12px rgba(56, 189, 248, 0.4)",
};

// LOGO TEXT
const logoText = {
  margin: 0,
  color: "#38bdf8",
  fontWeight: "700",
  letterSpacing: "1px",
};

// TAGLINE
const tagline = {
  fontSize: "12px",
  color: "#94a3b8",
  margin: 0,
  fontStyle: "italic",
};

// MENU
const menuContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const menuItem = {
  cursor: "pointer",
  padding: "10px",
  borderRadius: "8px",
};

// PROFILE
const profileCard = {
  borderTop: "1px solid #1e293b",
  paddingTop: "15px",
  marginTop: "10px",
  cursor: "pointer",
  background: "#1e293b",
  padding: "10px",
  borderRadius: "8px",
};

const logoutBtn = {
  cursor: "pointer",
  color: "#f87171",
  marginTop: "10px",
};

export default Sidebar;