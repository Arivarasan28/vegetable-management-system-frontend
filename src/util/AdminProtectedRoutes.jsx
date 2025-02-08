// import axios from 'axios';
// import React, { useEffect } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';

// const AdminProtectedRoutes = () => {
//     const role = localStorage.getItem("userRole");
//     const navigate = useNavigate();

//     if (userRole === "admin") {
//         return <Outlet />;
//       } else {
//         return <Navigate to="/" replace />;
//       }

//     useEffect(() => {
//         if (role !== "admin") {
//             navigate("/login");
//         }
//     }, [role, navigate]);

//     axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;

//     return <Outlet/>;
// }

// export default AdminProtectedRoutes;

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
