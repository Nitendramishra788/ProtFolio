import React, {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

function SkillList() {

  const [skills, setSkills] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("skills")) || [];

    setSkills(data);

  }, []);

  const handleDelete = (index) => {

    const updated =
      skills.filter((_, i) => i !== index);

    setSkills(updated);

    localStorage.setItem(
      "skills",
      JSON.stringify(updated)
    );
  };

  return (

    <div className="skill-list-page">

      {/* HEADER */}

      <div className="skill-header">

        <h2 className="page-title">
          All Skills
        </h2>

        <button
          className="add-skill-btn"
          onClick={() =>
            navigate("/admin/add-skill")
          }
        >
          + Add Skill
        </button>

      </div>

      {/* EMPTY */}

      {skills.length === 0 && (
        <p className="empty-message">
          No skills added yet
        </p>
      )}

      {/* GRID */}

      <div className="skill-grid">

        {skills.map((item, index) => (

          <div
            className="skill-card"
            key={index}
          >

            <img
              src={item.image}
              alt="skill"
              className="skill-image"
            />

            <h3 className="skill-title">
              {item.title}
            </h3>

            {/* BUTTONS */}

            <div className="skill-btns">

              <button
                className="delete-btn"
                onClick={() =>
                  handleDelete(index)
                }
              >
                Delete
              </button>

              <button
                className="edit-project-btn"
                onClick={() =>
                  navigate(`/admin/edit-skill/${index}`)
                }
              >
                Edit
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SkillList;