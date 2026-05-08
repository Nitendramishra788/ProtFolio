import React from 'react'
import Sidebar from '../component/Sidebar';
import { Outlet } from 'react-router-dom';

function DashboardLayout({children }) {
  return ( 
    <div style={{ display: "flex" }}>
      <Sidebar/>

      {/* main Contect */}

      <div style={{ flex: 1, padding: "20px", color: "white" }}>{children} </div>
      <Outlet/>
    </div>
   );
}

export default DashboardLayout;