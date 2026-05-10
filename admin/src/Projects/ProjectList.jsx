import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectList() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("projects")) || [];

    setProjects(data);

  }, []);

  const handleDelete = (index) => {

    const updated =
      projects.filter((_, i) => i !== index);

    setProjects(updated);

    localStorage.setItem(
      "projects",
      JSON.stringify(updated)
    );
  };

  return (

    <div className="project-list-page">

      <h2 className="page-title">
        All Projects
      </h2>

      {projects.length === 0 && (
        <p className="empty-message">
          No projects yet
        </p>
      )}

      <div className="project-grid">

        {projects.map((item, index) => (

          <div className="project-card" key={index}>

            <img
              src={item.image}
              alt="project"
              className="project-image"
            />

            <div className="project-content">

              <h3>{item.title}</h3>

              <p>
                {item.description}
              </p>

              {/* links */}

              <div className="project-links">

                <a
                  href={item.live}
                  target="_blank"
                >
                  Live
                </a>

                <a
                  href={item.code}
                  target="_blank"
                >
                  Code
                </a>

              </div>

              {/* buttons */}

              <div className="project-btns">

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>

                <button
                  className="edit-project-btn"
                  onClick={() =>
                    navigate(`/admin/edit-project/${index}`)
                  }
                >
                  Edit
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ProjectList;