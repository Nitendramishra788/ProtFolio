import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar({ openSidebar, setOpenSidebar }) {

  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.removeItem("auth");
    navigate("/admin/login");
  };

  return (
    <>
      {/* overlay */}

      {openSidebar && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      <div className={`sidebar ${openSidebar ? "show-sidebar" : ""}`}>

        <h1>Admin</h1>

        <ul>

          <li>
            <Link to="/admin">Dashboard</Link>
          </li>

          <li>
            <Link to="/admin/projects">Projects</Link>
          </li>

          <li>
            <Link to="/admin/add-project">Add Project</Link>
          </li>

          <li>
            <Link to="/admin/skills">Skills</Link>
          </li>

          <li>
            <Link to="/admin/messages">Messages</Link>
          </li>

        </ul>



        <button onClick={handelLogout}>
          Logout
        </button>

      </div>
    </>
  );
}

export default Sidebar;