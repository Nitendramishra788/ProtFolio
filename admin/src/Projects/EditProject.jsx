import React, { useState, useEffect } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

function EditProject() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
    live: "",
    code: "",
  });

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("projects")) || [];

    const index = Number(id);

    if (data[index]) {
      setProject(data[index]);
    }

  }, [id]);

  const handleChange = (e) => {

    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const data =
      JSON.parse(localStorage.getItem("projects")) || [];

    const index = Number(id);

    data[index] = project;

    localStorage.setItem(
      "projects",
      JSON.stringify(data)
    );

    alert("Project Updated ✅");

    navigate("/admin/projects");
  };

  return (

    <div className="form-page">

      <div className="form-container">

        <h2 className="form-title">
          Edit Project
        </h2>

        <form
          className="custom-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="title"
            value={project.title || ""}
            onChange={handleChange}
            placeholder="Project Title"
            className="custom-input"
          />

          <textarea
            name="description"
            value={project.description || ""}
            onChange={handleChange}
            placeholder="Project Description"
            className="custom-textarea"
          ></textarea>

          <input
            type="text"
            name="image"
            value={project.image || ""}
            onChange={handleChange}
            placeholder="Image URL"
            className="custom-input"
          />

          <input
            type="text"
            name="live"
            value={project.live || ""}
            onChange={handleChange}
            placeholder="Live Link"
            className="custom-input"
          />

          <input
            type="text"
            name="code"
            value={project.code || ""}
            onChange={handleChange}
            placeholder="GitHub Code Link"
            className="custom-input"
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Update Project
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditProject;