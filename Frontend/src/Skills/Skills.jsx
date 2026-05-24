

import React, { useEffect, useState } from "react";
import axios from "axios";


const Skills = () => {

  const [skills, setSkills] = useState([]);

  useEffect(() => {

    const fetchSkills = async () => {

      try {

        const { data } = await axios.get(
          "http://localhost:3000/api/skills"
        );

        setSkills(data.skills);

      } catch (error) {
        console.log(error);
      }
    };

    fetchSkills();

  }, []);

  // const loopSkills = [...skills, ...skills];

  return (

    <div className="RightMain">

      <div className="skills-container">

        {/* LEFT CONTENT */}

        <div className="skills-left">

          <button className="skills-badge">
            MY SKILLS
          </button>

          <h1>
            Creative <br />

            <span>Developer</span> <br />

            Skill <br />
            Showcase
          </h1>

          <p>
            Building premium futuristic interfaces
            with smooth animations and clean code.
          </p>

          <div className="line"></div>

        </div>

        {/* RIGHT CARDS */}

        <div className="skills-right">

          {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <div className="check-icon">
                ✔
              </div>

              <div className="skill-image">

                <img
                  src={`http://localhost:3000/uploads/${skill.image}`}
                  alt={skill.title}
                />

              </div>

              <div className="skill-content">

                <p>
                  {skill.title}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
};

export default Skills;