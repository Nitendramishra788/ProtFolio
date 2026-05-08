import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSkill() {
  const navigate = useNavigate();

  const [skill, setSkill] = useState({
    title: "",
    image: "",
  });

  const handleChange = (e) => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldSkills =
      JSON.parse(localStorage.getItem("skills")) || [];

    const updated = [...oldSkills, skill];

    localStorage.setItem("skills", JSON.stringify(updated));

    alert("Skill Added ✅");
    navigate("/admin/skills");
  };

  return (
    <div>
      <h2>Add Skill</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Skill Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddSkill;