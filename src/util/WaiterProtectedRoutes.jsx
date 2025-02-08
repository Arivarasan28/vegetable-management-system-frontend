import axios from 'axios';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const WaiterProtectedRoutes = () => {
    const role = localStorage.getItem("userRole");
    const navigate = useNavigate();

    useEffect(() => {
        if (role !== "waiter") {
            navigate("/login");
        }
    }, [role, navigate]);

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;

    return <Outlet/>;
}

export default WaiterProtectedRoutes;
