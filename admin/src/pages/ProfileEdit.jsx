import React, { useState, useEffect } from "react";
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
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("profile", JSON.stringify(profile));

    alert("Profile Updated ✅");
    navigate("/admin");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Profile</h2>

      <form onSubmit={handleSubmit}>

        <input name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
        <br /><br />

        <input name="age" value={profile.age} onChange={handleChange} placeholder="Age" />
        <br /><br />

        <input name="image" value={profile.image} onChange={handleChange} placeholder="Image URL" />
        <br /><br />

        <input name="about" value={profile.about} onChange={handleChange} placeholder="About" />
        <br /><br />

        <input name="message" value={profile.message} onChange={handleChange} placeholder="Message" />
        <br /><br />

        <button type="submit">Save</button>

      </form>
    </div>
  );
}

export default ProfileEdit;