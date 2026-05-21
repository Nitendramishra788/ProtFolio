import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
function Hero() {

  const [skills , setSkills] = useState([]);

  useEffect(()=>{
    const fetchSkills = async()=>{
      try{
        const {data} = await axios.get(
          "http://localhost:3000/api/skills"
        );

        setSkills(data.skills);

      }catch(error){
        console.log(error);
      }
    }

     fetchSkills();

  },[]);

  // const skills = [
  //   { name: "HTML", img: "/skills/HTML.png" },
  //   { name: "CSS", img: "/skills/CSS.png" },
  //   { name: "Git & GitHub", img: "/skills/gitGitHub.png" },
  //   { name: "Node.js", img: "/skills/React.Js.png" },
  //   { name: "MongoDB", img: "/skills/MongoDB.png" },
  //   { name: "JavaScript", img: "/skills/JavaScript.png" },
  //   { name: "C++", img: "/skills/C++.png" },
  //   { name: "Java", img: "/skills/Java.png" },
  // ];

  const loopSkills = [...skills, ...skills]; // infinite trick

  return ( 
    <div className="RightMain">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6 col-12 text-center mb-4">

            <div className="timeline">
              <div className="timeline-track">

                {loopSkills.map((item, index) => (
                  <div className="timeline-item active" key={index}>
                    <img src={`http://localhost:3000/uploads/${item.image}`} alt={item.title} />
                    <span>{item.title}</span>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="col-lg-6 col-12 text-center text-lg-start">

            <p>I turn ideas into real-world web experiences.</p>
            <p>Strong foundation in HTML, CSS, JavaScript, and React.</p>
            <p>I believe in clean code and smooth user interfaces.</p>
            <p>Continuously learning and leveling up my skills every day.</p>

            <Link to="/contact">
              <button className="btn btn-outline-light mt-3">
                Contact
              </button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;