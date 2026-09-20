import React, { useState } from "react";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import {
  createSkill
}
from "../services/SkillService";

function AddSkill() {

  const navigate = useNavigate();

  const [skill, setSkill] = useState({
    title: "",
    // image: "",
    image: null,
  });

 

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

    formData.append(
      "image",
      skill.image
    );

    await createSkill(
      formData,
      token
    );

   
    toast.success("skill created succesfull");

    navigate("/admin/skills");

  } catch (error) {
    toast.error("Failed to created skill");
    console.log(error);

  }

};

  return (

    <div className="form-page">

      <div className="form-container">

        <h2 className="form-title">
          Add Skill
        </h2>

        <form
          className="custom-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="title"
            placeholder="Skill Name"
            onChange={handleChange}
            className="custom-input"
          />

          <input
            type="file"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="custom-input"
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Add Skill
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddSkill;