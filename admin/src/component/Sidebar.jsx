import React from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate();

  const handelLogout=()=>{
      localStorage.removeItem("auth");
      navigate("/admin/login")
  }
    return ( 
        <div  style={{
        width: "220px",
        height: "100vh",
        background: "#111",
        padding: "20px",
      }}>
          <h1 style={{color:"white"}}>Admin</h1>

          <ul>
            <li><Link to="/admin" >Dashboard</Link></li>
            <li><Link to="/admin/projects" >Projets</Link></li>
            <li><Link to="/admin/add-project" >Add Projets</Link></li>
            <li><Link to="/admin/skills" >Skills</Link></li>
          </ul>

          <button onClick={handelLogout} style={{
          marginTop: "20px",
          padding: "10px",
          width: "100%",
          background: "red",
          borderRadius:"1rem",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
  > Logout</button>
        </div>
     );
}

export default Sidebar;