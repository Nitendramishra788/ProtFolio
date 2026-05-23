import React, {
  useEffect,
  useState,
} from "react";

import {
  getSkills,
  deleteSkill
}
  from "../services/SkillService";

import { useNavigate } from "react-router-dom";

function SkillList() {

  const [skills, setSkills] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {

  //   // const data =
  //   //   JSON.parse(localStorage.getItem("skills")) || [];

  //   // setSkills(data);

  // }, []);


  // new DB connection
  useEffect(() => {

    const fetchSkills =
      async () => {

        try {

          const data =
            await getSkills();

          setSkills(data);

        } catch (error) {

          console.log(error);

        }

      };

    fetchSkills();

  }, []);

  // const handleDelete = (index) => {

  //   const updated =
  //     skills.filter((_, i) => i !== index);

  //   setSkills(updated);

  //   localStorage.setItem(
  //     "skills",
  //     JSON.stringify(updated)
  //   );
  // };


  // after DB connection 

  const handleDelete =
    async (id) => {

      try {

        const token =
          localStorage.getItem("token");

        await deleteSkill(id, token);

        setSkills(

          skills.filter(
            (item) => item._id !== id
          )

        );

      } catch (error) {

        console.log(error);

      }

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
            // key={index}
            key={item._id}
          >

            <img
              // src={item.image}
              src={`http://localhost:3000/uploads/${item.image}`}
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
                  // handleDelete(index)
                  handleDelete(item._id)
                }
              >
                Delete
              </button>

              <button
                className="edit-project-btn"
                onClick={() =>
                  // navigate(`/admin/edit-skill/${index}`)
                  navigate(
                    `/admin/edit-skill/${item._id}`
                  )
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