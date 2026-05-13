import React from "react";

function ContactSocial() {

  return (

    <div className="RightMain">

      <div className="container">

        <div className="row">

          {/* LEFT SIDE */}

          <div className="col-4">

            <div className="social-links">

              <a href="https://www.linkedin.com/">
                LinkedIn
              </a>

              <a href="https://github.com/">
                GitHub
              </a>

              <a href="https://www.instagram.com/">
                Instagram
              </a>

              <a href="https://www.youtube.com/@codewithmishra777">
                YouTube
              </a>

            </div>

          </div>



          {/* RIGHT SIDE */}

          <div className="col-8">

            <div className="image-box">

              <img
                src="/image/media Pic.png"
                alt="contact"
                className="contact-img"
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ContactSocial;