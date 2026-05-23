import React, {
  useState,
  useEffect,
} from "react";

import axios from "axios";

import {
  updateSkill
}
  from "../services/SkillService";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

function EditSkill() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [skill, setSkill] = useState({
    title: "",
    // image: "",
    image: null,
  });

  // useEffect(() => {

  //   const data =
  //     JSON.parse(localStorage.getItem("skills")) || [];

  //   if (data[id]) {
  //     setSkill(data[id]);
  //   }

  // }, [id]);

  useEffect(() => {

    const fetchSkill =
      async () => {

        try {

          const { data } =
            await axios.get(
              "http://localhost:3000/api/skills"
            );

          const foundSkill =
            data.skills.find(
              (item) =>
                item._id === id
            );

          if (foundSkill) {

            setSkill(foundSkill);

          }

        } catch (error) {

          console.log(error);

        }

      };

    fetchSkill();

  }, [id]);


  // const handleChange = (e) => {

  //   setSkill({
  //     ...skill,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleChange = (e) => {

    if (
      e.target.name === "image"
    ) {

      setSkill({

        ...skill,

        image:
          e.target.files[0],

      });

    } else {

      setSkill({

        ...skill,

        [e.target.name]:
          e.target.value,

      });

    }

  };

  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //   const data =
  //     JSON.parse(localStorage.getItem("skills")) || [];

  //   data[id] = skill;

  //   localStorage.setItem(
  //     "skills",
  //     JSON.stringify(data)
  //   );

  //   alert("Skill Updated ✅");

  //   navigate("/admin/skills");
  // };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const token =
          localStorage.getItem("token");

        const formData =
          new FormData();

        formData.append(
          "title",
          skill.title
        );

        // image only if selected
        if (
          skill.image instanceof File
        ) {

          formData.append(
            "image",
            skill.image
          );

        }

        await updateSkill(
          id,
          formData,
          token
        );

        alert("Skill Updated ");

        navigate("/admin/skills");

      } catch (error) {

        console.log(error);

      }

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

          {/* <input
            type="file"
            name="image"
            value={skill.image || ""}
            onChange={handleChange}
            placeholder="Image URL"
            className="custom-input"
          /> */}

          <input
            type="file"
            name="image"
            onChange={handleChange}
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