import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardHome() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({});
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalSkills, setTotalSkills] = useState(0);

  useEffect(() => {
    const profileData =
      JSON.parse(localStorage.getItem("profile")) || {};

    const projects =
      JSON.parse(localStorage.getItem("projects")) || [];

    const skills =
      JSON.parse(localStorage.getItem("skills")) || [];

    setProfile(profileData);
    setTotalProjects(projects.length);
    setTotalSkills(skills.length);
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >

        {/* LEFT SIDE */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={profile.image || "/default.png"}
              alt="profile"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            {/* edit icon */}
            <button
              onClick={() => navigate("/admin/profile-edit")}
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              ✏️
            </button>
          </div>

          <p>{profile.age || ""}</p>
          <p>{profile.about || "Add your bio..."}</p>
        </div>

        {/* RIGHT SIDE */}
        <div style={{ flex: 2 }}>
          <h2>Welcome {profile.name || "User"} 👋</h2>
          <p>{profile.message || "Write something about yourself..."}</p>

          <div style={{ marginTop: "20px" }}>
            <h3>Total Projects: {totalProjects}</h3>
            <h3>Total Skills: {totalSkills}</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardHome;