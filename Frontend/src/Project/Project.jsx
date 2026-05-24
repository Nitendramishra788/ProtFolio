import React,{useEffect , useState} from "react";
import axios from "axios";

function ProjectSection() {

  const [projects , setProjects] = useState([]);

  useEffect(()=>{
    const fetchProjects = async()=>{
      try{
        const {data} = await axios.get(
      "http://localhost:3000/api/projects"
    );

    console.log(data);

    setProjects(data.Projects);
      }catch(errer){
        console.log(errer);
      }
    }

    fetchProjects();
  },[]);

  // const projects = [
  //   {
  //     id: 1,
  //     title: "GoExplore",
  //     desc: "GoExplore is a full-stack travel listing web application where users can explore locations, view details, and share reviews. The platform allows authors to manage listings while normal users can browse and interact with the content.",
  //     image: "/image/GoExplore.jpg",
  //     live: "https://goexplore-bzw6.onrender.com/location",
  //     code: "https://github.com/Nitendramishra788/GoExplore",
  //   },
  //   {
  //     id: 2,
  //     title: "Zerodha Clone",
  //     desc: "Using React",
  //     image: "/image/Zerodha.png",
  //     live: "#",
  //     code: "#",
  //   },
  // ];

  return ( 
        <div className="RightMain">
          <div className="project-section container">
     <hr></hr>
      <h2 className="text-center mb-0">My Projects</h2>
      <hr></hr>

      <div className="row">
        {projects.map((item) => (
          <div className="col-lg-4 col-md-6 col-12 mb-4" key={item._id}>
            <div className="project-card">
              <img src={`http://localhost:3000/uploads/${item.image}`} alt="project" />
              <h5>{item.title}</h5>
              <p>{item.description}</p>

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
        </div>
    
  );
}

export default ProjectSection;