import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditSkill() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [skill, setSkill] = useState({
    title: "",
    image: "",
  });

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("skills")) || [];

    if (data[id]) {
      setSkill(data[id]);
    }
  }, [id]);

  const handleChange = (e) => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data =
      JSON.parse(localStorage.getItem("skills")) || [];

    data[id] = skill;

    localStorage.setItem("skills", JSON.stringify(data));

    alert("Skill Updated ✅");
    navigate("/admin/skills");
  };

  return (
    <div>
      <h2>Edit Skill</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" value={skill.title} onChange={handleChange} />
        <br /><br />

        <input name="image" value={skill.image} onChange={handleChange} />
        <br /><br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditSkill;