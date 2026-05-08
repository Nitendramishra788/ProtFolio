import React from 'react';

function ProjectSection() {

  const projects = [
    {
      id: 1,
      title: "GoExplore",
      desc: "GoExplore is a full-stack travel listing web application where users can explore locations, view details, and share reviews. The platform allows authors to manage listings while normal users can browse and interact with the content.",
      image: "/image/GoExplore.jpg",
      live: "https://goexplore-bzw6.onrender.com/location",
      code: "https://github.com/Nitendramishra788/GoExplore",
    },
    {
      id: 2,
      title: "Zerodha Clone",
      desc: "Using React",
      image: "/image/Zerodha.png",
      live: "#",
      code: "#",
    },
  ];

  return ( 
    <div className="project-section container">

      <h2 className="text-center mb-4">My Projects</h2>

      <div className="row">
        {projects.map((item) => (
          <div className="col-lg-4 col-md-6 col-12 mb-4" key={item.id}>
            <div className="project-card">
              <img src={item.image} alt="project" />
              <h5>{item.title}</h5>
              <p>{item.desc}</p>

              <div className="project-buttons">
                <a href={item.live} className="btn btn-outline-light btn-sm">
                  Live
                </a>
                <a href={item.code} className="btn btn-outline-light btn-sm ms-2">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProjectSection;