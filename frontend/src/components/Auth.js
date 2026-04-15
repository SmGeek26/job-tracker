import React from "react";
import logoImg from "../assets/goal.png";

function Auth({
  login,
  register,
  setLoginEmail,
  setLoginPassword,
  setRegisterName,
  setRegisterEmail,
  setRegisterPassword,
  error,
}) {
  return (
    <div style={center}>
      {/* LOGO + TITLE */}
      <div style={header}>
        <img src={logoImg} alt="logo" style={logoImgStyle} />

        <h1 style={title}>Career Tracker</h1>

        <p style={tagline}>
          One application closer to your goal 🚀
        </p>
      </div>

      {/* LOGIN */}
      <div style={card}>
        <h2 style={sectionHeading}>Login</h2>

        <input
          placeholder="Email"
          style={input}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          style={input}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button style={btn} onClick={login}>
          Login
        </button>

        {error && <p style={errorText}>{error}</p>}
      </div>

      {/* REGISTER */}
      <div style={card}>
        <h2 style={sectionHeading}>Register</h2>

        <input
          placeholder="Name"
          style={input}
          onChange={(e) => setRegisterName(e.target.value)}
        />

        <input
          placeholder="Email"
          style={input}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          style={input}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />

        <button style={btn} onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
}

// 🌄 BACKGROUND + CENTER
const center = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  fontFamily: "Raleway, sans-serif",

  // BACKGROUND IMAGE + OVERLAY
  backgroundImage: `
    linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)),
    url('https://etimg.etb2bimg.com/photo/112029238.cms')
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// HEADER
const header = {
  textAlign: "center",
  marginBottom: "20px",
};

// LOGO
const logoImgStyle = {
  width: "60px",
  height: "60px",
  objectFit: "contain",
  marginBottom: "10px",
  boxShadow: "0 0 15px rgba(56, 189, 248, 0.4)",
  borderRadius: "10px",
};

// TITLE
const title = {
  margin: 0,
  color: "#38bdf8",
  fontWeight: "700",
  fontSize: "28px",
};

// TAGLINE
const tagline = {
  fontSize: "14px",
  color: "#cbd5f5",
  marginTop: "5px",
  fontStyle: "italic",
};

// CARD
const card = {
  background: "rgba(255, 255, 255, 0.92)",
  padding: "20px",
  margin: "10px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "260px",
  backdropFilter: "blur(3px)",
};

// SECTION HEADING
const sectionHeading = {
  textAlign: "center",
  fontSize: "20px",
  fontWeight: "600",
  color: "#14b8a6",
};

// INPUT
const input = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #cbd5f5",
};

// BUTTON
const btn = {
  background: "#2563eb",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

// ERROR
const errorText = {
  color: "#f87171",
  fontSize: "13px",
  textAlign: "center",
};

export default Auth;