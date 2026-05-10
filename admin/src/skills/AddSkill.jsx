import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function AddSkill() {

  const navigate = useNavigate();

  const [skill, setSkill] = useState({
    title: "",
    image: "",
  });

  const handleChange = (e) => {

    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const oldSkills =
      JSON.parse(localStorage.getItem("skills")) || [];

    const updated = [
      ...oldSkills,
      skill,
    ];

    localStorage.setItem(
      "skills",
      JSON.stringify(updated)
    );

    alert("Skill Added ✅");

    navigate("/admin/skills");
  };

  return (

    <div className="form-page">

      <div className="form-container">

        <h2 className="form-title">
          Add Skill
        </h2>

        <form
          className="custom-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="title"
            placeholder="Skill Name"
            onChange={handleChange}
            className="custom-input"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="custom-input"
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Add Skill
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddSkill;