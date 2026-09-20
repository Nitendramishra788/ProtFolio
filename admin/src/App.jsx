import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from './routes/AdminRoutes';
import {Toaster } from "react-hot-toast";

// import Sidebar from './component/Sidebar'
// import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App
