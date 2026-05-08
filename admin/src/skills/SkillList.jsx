import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SkillList() {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("skills")) || [];
    setSkills(data);
  }, []);

  const handleDelete = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    setSkills(updated);
    localStorage.setItem("skills", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>All Skills</h2>

      <button onClick={() => navigate("/admin/add-skill")}>
        + Add Skill
      </button>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {skills.map((item, index) => (
          <div key={index} style={{
            border: "1px solid white",
            padding: "10px",
            borderRadius: "10px",
            width: "150px",
            textAlign: "center"
          }}>
            <img src={item.image} width="80" />

            <p>{item.title}</p>

            <button onClick={() => handleDelete(index)}>
              Delete
            </button>

            <button onClick={() => navigate(`/admin/edit-skill/${index}`)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillList;