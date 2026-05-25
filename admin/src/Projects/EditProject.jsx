import React, { useState, useEffect } from "react";
import {
  getSingleProject,
  updateProject,
} from "../services/ProjectService";

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
 
    live: "",
    code: "",
  });

const [image, setImage] = useState(null);

  useEffect(() => {

    const fetchProject = async () => {

      try {

  const data = await getSingleProject(id);

  setProject(data);

} catch (error) {

  console.log(error);

}

};
    fetchProject();

  }, [id]);

  const handleChange = (e) => {

    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // handle Image
  const handleImageChange = (e) => {

  setImage(e.target.files[0]);

};

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

formData.append("title", project.title);
formData.append("description", project.description);
formData.append("live", project.live);
formData.append("code", project.code);

if (image) {
  formData.append("image", image);
}


await updateProject(id, formData);
  

    alert("Project Updated ");

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
            type="file"
            name="image"
            onChange={handleImageChange}
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