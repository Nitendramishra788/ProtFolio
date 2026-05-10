import React from "react";

function Topbar({ toggleSidebar }) {
  return (
    <div className="topbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <h2>Admin Dashboard</h2>
    </div>
  );
}

export default Topbar;