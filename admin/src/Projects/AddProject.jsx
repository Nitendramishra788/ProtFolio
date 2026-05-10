import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProject() {

  const navigate = useNavigate();

  const [project, setProject] = useState({
    image: "",
    title: "",
    description: "",
    live: "",
    code: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const oldProjects =
      JSON.parse(localStorage.getItem("projects")) || [];

    const updatedProjects = [
      ...oldProjects,
      project,
    ];

    localStorage.setItem(
      "projects",
      JSON.stringify(updatedProjects)
    );

    alert("Project Added");

    navigate("/admin/projects");
  };

  return (

    <div className="form-page">

      <div className="form-container">

        <h2 className="form-title">
          Add Project
        </h2>

        <form
          className="custom-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            onChange={handleChange}
            className="custom-input"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            onChange={handleChange}
            className="custom-textarea"
          ></textarea>

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="custom-input"
          />

          <input
            type="text"
            name="live"
            placeholder="Live Link"
            onChange={handleChange}
            className="custom-input"
          />

          <input
            type="text"
            name="code"
            placeholder="GitHub Code Link"
            onChange={handleChange}
            className="custom-input"
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Add Project
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProject;