import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";




function ProjectList() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(data);
  }, []);

  const handleDelete = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>All Projects</h2>

      {projects.length === 0 && <p>No projects yet</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {projects.map((item, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              border: "1px solid white",
              padding: "10px",
              borderRadius: "10px"
            }}
          >
            <img
              src={item.image}
              alt="project"
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />

            <h4>{item.title}</h4>
            <p>{item.description}</p>

            <a href={item.live} target="_blank">Live</a> |{" "}
            <a href={item.code} target="_blank">Code</a>

            <br /><br />

            <button onClick={() => handleDelete(index)} style={{
          marginTop: "20px",
          padding: "10px",
          width: "100px",
          background: "red",
          color: "white",
          borderRadius:"1rem",
          border: "none",
          cursor: "pointer",
        }}>
              Delete
            </button>

            {/* edit btn */}

            <button style={{
          marginTop: "20px",
          padding: "10px",
          width: "100px",
          background: "green",
          color: "white",
          borderRadius:"1rem",
          border: "none",
          cursor: "pointer",
        }} onClick={()=> navigate(`/admin/edit-project/${index}`)} >Edit Project</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;