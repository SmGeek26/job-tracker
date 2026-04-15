import React, { useState } from "react";
import Auth from "./components/Auth";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AddJob from "./components/AddJob";
import JobList from "./components/JobList";
import Profile from "./components/Profile";

function App() {
  const BASE_URL = "https://job-tracker-backend-5xka.onrender.com";

  const [page, setPage] = useState("dashboard");
  const [user, setUser] = useState(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("APPLIED");
  const [date, setDate] = useState("");

  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  const login = async () => {
    try {
      const res = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data);
        setError("");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch {
      setError("Server error. Please try again.");
    }
  };

  const register = async () => {
    const res = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data);
      setError("");
    } else {
      setError(data.message || "Registration failed");
    }
  };

  const logout = () => setUser(null);

  const addJob = async () => {
    await fetch(`${BASE_URL}/jobs/user/${user.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company,
        role,
        status,
        appliedDate: date,
      }),
    });

    setCompany("");
    setRole("");
    setDate("");
    setStatus("APPLIED");
  };

  const getJobs = async () => {
    const res = await fetch(`${BASE_URL}/jobs/user/${user.id}`);
    const data = await res.json();
    setJobs(data);
  };

  if (!user) {
    return (
      <Auth
        login={login}
        register={register}
        setLoginEmail={setLoginEmail}
        setLoginPassword={setLoginPassword}
        setRegisterName={setRegisterName}
        setRegisterEmail={setRegisterEmail}
        setRegisterPassword={setRegisterPassword}
        error={error}
      />
    );
  }

  return (
    <div style={{ display: "flex", fontFamily: "Raleway, sans-serif" }}>
      <Sidebar setPage={setPage} logout={logout} user={user} />

      <div style={content}>
        <div style={innerContainer}>

          {page === "dashboard" && (
            <Dashboard
                user={user}
                company={company}
                role={role}
                status={status}
                date={date}
                setCompany={setCompany}
                setRole={setRole}
                setStatus={setStatus}
                setDate={setDate}
                addJob={addJob}
              />
          )}

          {page === "add" && (
            <AddJob
              company={company}
              role={role}
              status={status}
              date={date}
              setCompany={setCompany}
              setRole={setRole}
              setStatus={setStatus}
              setDate={setDate}
              addJob={addJob}
            />
          )}

          {page === "jobs" && (
            <JobList jobs={jobs} getJobs={getJobs} />
          )}

          {page === "profile" && <Profile user={user} />}

        </div>
      </div>
    </div>
  );
}

// BACKGROUND + CENTER
const content = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "40px 20px",
  minHeight: "100vh",
  backgroundImage: `
    linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)),
    url('https://a.storyblok.com/f/252228/79140e8908/job-interview-english.jpg')
  `,
  backgroundSize: "cover",
  backgroundPosition: "left center",
};

const innerContainer = {
  width: "100%",
  maxWidth: "600px",
  background: "rgba(255, 255, 255, 0.92)",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  backdropFilter: "blur(3px)",
};

export default App;