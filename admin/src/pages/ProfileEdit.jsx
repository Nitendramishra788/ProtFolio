import React, {
  useState,
  useEffect,
} from "react";

import { useNavigate } from "react-router-dom";

function ProfileEdit() {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    age: "",
    image: "",
    about: "",
    message: "",
  });

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("profile")) || {};

    setProfile({
      name: data.name || "",
      age: data.age || "",
      image: data.image || "",
      about: data.about || "",
      message: data.message || "",
    });

  }, []);

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    alert("Profile Updated ✅");

    navigate("/admin");
  };

  return (

    <div className="form-page">

      <div className="form-container">

        <h2 className="form-title">
          Edit Profile
        </h2>

        <form
          className="custom-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            value={profile.name || ""}
            onChange={handleChange}
            placeholder="Your Name"
            className="custom-input"
          />

          <input
            type="text"
            name="age"
            value={profile.age || ""}
            onChange={handleChange}
            placeholder="Your Age"
            className="custom-input"
          />

          <input
            type="text"
            name="image"
            value={profile.image || ""}
            onChange={handleChange}
            placeholder="Profile Image URL"
            className="custom-input"
          />

          <textarea
            name="about"
            value={profile.about || ""}
            onChange={handleChange}
            placeholder="About Yourself"
            className="custom-textarea"
          ></textarea>

          <textarea
            name="message"
            value={profile.message || ""}
            onChange={handleChange}
            placeholder="Custom Welcome Message"
            className="custom-textarea"
          ></textarea>

          <button
            type="submit"
            className="submit-btn"
          >
            Save Profile
          </button>

        </form>

      </div>

    </div>
  );
}

export default ProfileEdit;