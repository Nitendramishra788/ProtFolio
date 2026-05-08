import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";
import ProjectList from "../Projects/ProjectList";
import SkillList from "../skills/SkillList";
import AddProject from "../Projects/AddProject";
import Login from "../pages/Login";
import useAuth from "../hooks/useAuth";
import ProtectedRoute from "../component/ProtectedRoute";
import EditProject from "../Projects/EditProject";
import ProfileEdit from '../pages/ProfileEdit'
import AddSkill from "../skills/AddSkill";
import EditSkill from "../skills/EditSkill";

function AdminRoutes() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      {/* login Route */}

      <Route path="/login" element={<Login />} />

      {/* For the protaction of Routes */}

      <Route
        path="/"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="projects" element={<ProjectList />} />
        <Route path="add-project" element={<AddProject />} />
        <Route path="skills" element={<SkillList />} />
        <Route path="/add-skill" element={<AddSkill />} />
        <Route path="/edit-skill/:id" element={<EditSkill />} />
        <Route path="/edit-project/:id" element={<EditProject/>}/>
        <Route path="/profile-edit"  element={<ProfileEdit/>}/>


        
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
