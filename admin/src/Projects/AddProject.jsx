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
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldProjects = JSON.parse(localStorage.getItem("projects")) || [];

    const updatedProjects = [...oldProjects, project];

    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    alert("Project Added ");

    navigate("/admin/projects");
  };

  return (
    <div>
      <h2>Add Project Page</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          style={{
            width: "35rem",
            height: "2rem",
            borderRadius: "1rem",
            paddingLeft: "1.2rem",
          }}
        />
        <br />
        <br />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          style={{
            width: "35rem",
            height: "2rem",
            borderRadius: "1rem",
            paddingLeft: "1.2rem",
          }}
        />
        <br />
        <br />

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          style={{
            width: "35rem",
            height: "2rem",
            borderRadius: "1rem",
            paddingLeft: "1.2rem",
          }}
        />
        <br />
        <br />

        <input
          name="live"
          placeholder="Live Link"
          onChange={handleChange}
          style={{
            width: "35rem",
            height: "2rem",
            borderRadius: "1rem",
            paddingLeft: "1.2rem",
          }}
        />
        <br />
        <br />

        <input
          name="code"
          placeholder="Code Link"
          onChange={handleChange}
          style={{
            width: "35rem",
            height: "2rem",
            borderRadius: "1rem",
            paddingLeft: "1.2rem",
          }}
        />
        <br />
        <br />

        <button type="submit" style={{width:"10rem" , height:"3rem" , backgroundColor:"green" , borderRadius:"1.5rem" , color:"white" , cursor:"pointer"}}>Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
