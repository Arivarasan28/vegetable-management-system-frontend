import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoutes = () => {
  const userRole = localStorage.getItem("userRole");

  // Check if the user is logged in and is an admin
  if (userRole === "admin") {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default AdminProtectedRoutes;
