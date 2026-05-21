import React, { useState, useEffect } from "react";
import TypingText from "./TypingText";
import Resume from "../Resume";
import axios from "axios";

function Profile() {

  const [profile , setProfile] = useState(null);

  useEffect(()=>{
    const fetchProfile = async ()=>{
      try{
        const {data} = await axios.get("http://localhost:3000/api/profile");
        setProfile(data.profile);
      }
      catch(error){
        console.error("Error fetching profile:", error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-lg-6 col-12 text-center">
          <img
            src={`http://localhost:3000/uploads/${profile?.image}`}
            className="rounded profile-img"
            alt="Profile pic"
          />
        </div>

        {/* Text */}
        <div className="col-lg-6 col-12 text-center text-lg-start">
        <h1 className="hero-title">
          Hi, I'm {profile?.name}
        </h1>

          <p className="hero-desc">
          {profile?.about}
          </p>

          <TypingText />

          <div className="hero-buttons">
           
            <div className="hero-buttons">
              <Resume />
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
