import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="dashboard-layout">

      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      <div className="main-section">

        <Topbar
          toggleSidebar={() => setOpenSidebar(!openSidebar)}
        />

        <div className="page-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default DashboardLayout;