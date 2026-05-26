import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../services/ProjectService";
import { getSkills } from "../services/SkillService";
import { getProfile } from "../services/ProfileService";

function DashboardHome() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({});
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalSkills, setTotalSkills] = useState(0);

  const fetchDashboardData = async () => {

    try {

      const profileData = await getProfile();

      const projectsData = await getProjects();

      const skillsData = await getSkills();

      setProfile(profileData);

      setTotalProjects(projectsData.length);

      setTotalSkills(skillsData.length);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    // const profileData =
    //   JSON.parse(localStorage.getItem("profile")) || {};

    // const projects =
    //   JSON.parse(localStorage.getItem("projects")) || [];

    // const skills =
    //   JSON.parse(localStorage.getItem("skills")) || [];

    // setProfile(profileData);
    // setTotalProjects(projects.length);
    // setTotalSkills(skills.length);

    // here stop local Storage service

    fetchDashboardData();

  }, []);

  return (

    <div className="dashboard-home">

      <div className="dashboard-container">

        {/* LEFT SIDE */}

        <div className="profile-section">

          <div className="profile-image-box">

            <img
              src={
                profile.image
                  ? `http://localhost:3000/uploads/${profile.image}`
                  : "/default.png"
              }
              alt="profile"
              className="profile-image"
            />

            <button
              className="edit-btn"
              onClick={() => navigate("/admin/profile-edit")}
            >
              ✏️
            </button>

          </div>

          <h3 className="profile-age">
            {profile.age || "Age"}
          </h3>

          <p className="profile-about">
            {profile.about || "Add your bio..."}
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="welcome-section">

          <h2>
            Welcome {profile.name || "User"} 👋
          </h2>

          <p className="welcome-message">
            {profile.message ||
              "Write something about yourself..."}
          </p>

          {/* STATS */}

          <div className="stats-container">

            <div className="stats-card">
              <h3>{totalProjects}</h3>
              <p>Total Projects</p>
            </div>

            <div className="stats-card">
              <h3>{totalSkills}</h3>
              <p>Total Skills</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardHome;