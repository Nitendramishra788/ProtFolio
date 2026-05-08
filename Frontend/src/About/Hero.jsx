import React from "react";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="RightMain">
      <div className="container">
        <div className="row align-items-center">
          
          <div
            className="col-lg-6 col-12 text-center"
           
          >
            <img src="/image/about.png" alt="about" className="about-img" />
          </div>

          
          <div className="col-lg-6 col-12">
            <h6 className="HeadText">Hi, I'm Nitendra (nit) Mishra, a passionate developer who loves building clean and user-friendly digital experiences.</h6>
            <p className="aboutText">I focus on creating practical solutions that solve real-world problems and improve user experience.</p>
            <p className="aboutText">I enjoy learning new technologies, exploring creative ideas, and constantly challenging myself to grow as a developer.
            </p>
            <p className="aboutText">I believe in writing clean, efficient code and building projects that are not only functional but also visually appealing.</p>

            <p className="aboutText">I am currently working towards becoming an AI Engineer and exploring how intelligent systems can solve complex problems.</p>

            <p className="aboutText">I am always open to new opportunities and collaborations where I can learn, contribute, and grow.</p>
           <Link to="/skill"><button className="btn btn-outline-light" >Skills</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
