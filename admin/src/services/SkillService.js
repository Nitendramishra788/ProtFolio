import axios from "axios";

const API =
"http://localhost:3000/api/skills";

// GET ALL SKILLS
export const getSkills =
async () => {

  const { data } =
    await axios.get(API);

  return data.skills;
};

// CREATE SKILL
export const createSkill =
async (formData, token) => {

  const { data } =
    await axios.post(

      API,

      formData,

      {
        headers: {

          Authorization:
            `Bearer ${token}`,

          "Content-Type":
            "multipart/form-data",

        },
      }

    );

  return data;
};


// UPDATE SKILL
export const updateSkill =
async (id, formData, token) => {

  const { data } =
    await axios.put(

      `${API}/${id}`,

      formData,

      {
        headers: {

          Authorization:
            `Bearer ${token}`,

          "Content-Type":
            "multipart/form-data",

        },
      }

    );

  return data;
};



// DELETE SKILL
export const deleteSkill =
async (id, token) => {

  const { data } =
    await axios.delete(

      `${API}/${id}`,

      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }

    );

  return data;
};