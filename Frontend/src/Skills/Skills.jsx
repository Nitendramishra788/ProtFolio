// Skills.jsx

import React from "react";


const dummySkills = [
  {
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Modern frontend development using React.js with premium UI interactions and smooth animations.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    description:
      "Building scalable backend systems with Node.js, Express.js, and MongoDB integration.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description:
      "Creating futuristic portfolio experiences with glassmorphism and neon UI effects.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Responsive web applications optimized for performance and smooth user experience.",
  },
];

const Skills = () => {
  return (
    <section className="skills-section">

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

          {dummySkills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <div className="check-icon">
                ✔
              </div>

              <div className="skill-image">

                <img
                  src={skill.image}
                  alt="skill"
                />

              </div>

              <div className="skill-content">

                <p>
                  {skill.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;