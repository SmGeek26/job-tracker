import React, { useState, useEffect } from "react";

const BASE_URL = "https://job-tracker-backend-5xka.onrender.com";

function Profile({ user }) {
  const [profile, setProfile] = useState({
    address: "",
    phone: "",
    profilePhoto: "",
    cv: "",
    dob: ""
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setProfile({
        address: user.address || "",
        phone: user.phone || "",
        profilePhoto: user.profilePhoto || "",
        cv: user.cv || "",
        dob: user.dob || ""
      });
    }
  }, [user]);

  // 🧠 Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // 🖼️ Upload Image
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_preset");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await res.json();

    setProfile({
      ...profile,
      profilePhoto: data.secure_url
    });
  };

  // 📄 Upload CV
  const handleCVUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_preset");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/raw/upload",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await res.json();

    setProfile({
      ...profile,
      cv: data.secure_url
    });
  };

  // 💾 Save profile
  const handleSave = async () => {
    const response = await fetch(`${BASE_URL}/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    });

    if (response.ok) {
      setMessage("Profile updated successfully ✅");
    } else {
      setMessage("Failed to update ❌");
    }
  };

  return (
    <div style={container}>
      <h2 style={heading}>My Profile</h2>

      <p style={tagline}>Complete your profile</p>

      {/* 👤 USER INFO */}
      <div style={infoBox}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.id}</p>
      </div>

      {/* 🖼️ PROFILE IMAGE */}
      {profile.profilePhoto && (
        <img src={profile.profilePhoto} alt="Profile" style={image} />
      )}

      <input
        type="file"
        onChange={(e) => handleImageUpload(e.target.files[0])}
      />

      {/* 📄 CV */}
      {profile.cv && (
        <a href={profile.cv} target="_blank" rel="noreferrer">
          View CV
        </a>
      )}

      <input
        type="file"
        onChange={(e) => handleCVUpload(e.target.files[0])}
      />

      {/* 🧾 OTHER FIELDS */}
      <input
        name="address"
        placeholder="Address"
        value={profile.address}
        onChange={handleChange}
        style={input}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={profile.phone}
        onChange={handleChange}
        style={input}
      />

      <input
        type="date"
        name="dob"
        value={profile.dob}
        onChange={handleChange}
        style={input}
      />

      <button onClick={handleSave} style={button}>
        Save Profile
      </button>

      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
}

// 🎨 STYLES

const container = {
  padding: "20px",
  maxWidth: "420px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  background: "rgba(255,255,255,0.95)",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
};

const heading = {
  textAlign: "center",
  color: "#14b8a6",
  fontSize: "24px",
  fontWeight: "600"
};

const tagline = {
  textAlign: "center",
  fontSize: "14px",
  color: "#555"
};

const infoBox = {
  background: "#f3f4f6",
  padding: "10px",
  borderRadius: "8px",
  fontSize: "14px"
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const button = {
  padding: "10px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const messageStyle = {
  textAlign: "center",
  fontSize: "14px"
};

const image = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  alignSelf: "center"
};

export default Profile;