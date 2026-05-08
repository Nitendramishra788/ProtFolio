import React from "react";
import TypingText from "./TypingText";
import Resume from "../Resume";

function Profile() {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-lg-6 col-12 text-center">
          <img
            src="/image/Profile.png"
            className="rounded profile-img"
            alt="Profile pic"
          />
        </div>

        {/* Text */}
        <div className="col-lg-6 col-12 text-center text-lg-start">
          <h1 className="hero-title">Hi, I'm Nitendra Mishra</h1>

          <p className="hero-desc">
            Turning ideas into real-world applications using modern web
            technologies and AI.
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
