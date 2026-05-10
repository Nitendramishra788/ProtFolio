import React, {
  useState,
  useEffect,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

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

    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const data =
      JSON.parse(localStorage.getItem("skills")) || [];

    data[id] = skill;

    localStorage.setItem(
      "skills",
      JSON.stringify(data)
    );

    alert("Skill Updated ✅");

    navigate("/admin/skills");
  };

  return (

    <div className="form-page">

      <div className="form-container">

        <h2 className="form-title">
          Edit Skill
        </h2>

        <form
          className="custom-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="title"
            value={skill.title || ""}
            onChange={handleChange}
            placeholder="Skill Name"
            className="custom-input"
          />

          <input
            type="text"
            name="image"
            value={skill.image || ""}
            onChange={handleChange}
            placeholder="Image URL"
            className="custom-input"
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Update Skill
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditSkill;