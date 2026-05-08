import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
  const data = JSON.parse(localStorage.getItem("projects")) || [];
  const index = Number(id);

  if (data[index]) {
    setProject(data[index]);
  }
}, [id]);

  if (!project) {
    return <h2>Loading...</h2>;
  }

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("projects")) || [];
    const index = Number(id);

    data[index] = project;

    localStorage.setItem("projects", JSON.stringify(data));

    alert("Project Updated ✅");

    navigate("/admin/projects");
  };

  return (
    <div>

      {/* DEBUG */}
      <h2>{JSON.stringify(project)}</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" value={project.title || ""} onChange={handleChange} /><br></br>
        <input name="description" value={project.description || ""} onChange={handleChange} /><br></br>
        <input name="image" value={project.image || ""} onChange={handleChange} /><br></br>
        <input name="live" value={project.live || ""} onChange={handleChange} /><br></br>
        <input name="code" value={project.code || ""} onChange={handleChange} /><br></br>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditProject;