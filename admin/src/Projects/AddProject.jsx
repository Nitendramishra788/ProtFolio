import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../services/ProjectService";

function AddProject() {

  const navigate = useNavigate();

  const [project, setProject] = useState({

    title: "",
    description: "",
    live: "",
    code: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // handle Image

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("description", project.description);
    formData.append("live", project.live);
    formData.append("code", project.code);
    formData.append("image", image);

    await createProject(formData);
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
            type="file"
            name="image"
            onChange={handleImageChange}
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