import React, {
  useState,
  useEffect,
} from "react";
import toast from "react-hot-toast";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function ProfileEdit() {

  const navigate = useNavigate();
  const [loading , setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    image: "",
    about: "",
    message: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {


    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/profile"
        );

        if (data.profile) {
          setProfile(data.profile);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();

  }, []);

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //   localStorage.setItem(
  //     "profile",
  //     JSON.stringify(profile)
  //   );

  //   alert("Profile Updated ✅");

  //   navigate("/admin");
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("name", profile.name);
      formData.append("age", profile.age);
      formData.append("about", profile.about);
      formData.append("message", profile.message);

      if (image) {
        formData.append("image", image);
      }

      await axios.put(
        "http://localhost:3000/api/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // alert("Profile Updated");
      toast.success("Your profile updated successfuly")
      navigate("/admin");
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Profile update failed ");
    }
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

          {/* <input
            type="text"
            name="image"
            value={profile.image || ""}
            onChange={handleChange}
            placeholder="Profile Image URL"
            className="custom-input"
          /> */}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
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
            disabled={loading}
          >
           {loading?"processing..":"Save Profile"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default ProfileEdit;