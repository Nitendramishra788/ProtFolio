import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProjects, 
  deleteProject
}  from "../services/ProjectService";

function ProjectList() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    // this is part of storing data in local store 
    // const data =
    //   JSON.parse(localStorage.getItem("projects")) || [];

    // part of DataBase

    const fetchProjects = async ()=>{
      try{
        const data = await getProjects();

        setProjects(data);
      }catch(error){
        console.log(error);
      }
    }

    // this is using for localStorage function
    // setProjects(data);

    fetchProjects();

  }, []);
  

const handleDelete =
async (id) => {

  try {

    const token =
      localStorage.getItem("token");

    await deleteProject(
      id,
      token
    );

    setProjects(

      projects.filter(
        (item) =>
          item._id !== id
      )

    );

  } catch (error) {

    console.log(error);

  }

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

          <div className="project-card" key={item._id}>

            <img
              src={`http://localhost:3000/uploads/${item.image}`}
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
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>

                <button
                  className="edit-project-btn"
                  onClick={() =>
                    navigate(`/admin/edit-project/${item._id}`)
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