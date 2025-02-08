import React from "react";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication token or session data
        localStorage.removeItem("authToken");
        sessionStorage.clear(); // Optional: Clear session storage if used
        localStorage.clear();
        // Clear other user-related data (if any) or reset global state
        // Example: Dispatch to Redux or context API
        // dispatch({ type: "LOGOUT" });
    
        // Redirect to the login page
        navigate("/", { replace: true }); // Prevent back navigation to the protected route
      };

  return (
    <div className="h-screen bg-gray-900 text-white w-64 flex flex-col">
      <div className="py-4 px-6 text-xl font-bold border-b border-gray-800">
        VEGIEZ Admin
      </div>
      <nav className="flex-1 px-4 py-6 space-y-4">
        <a
          href="/admin/dashboard"
          className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Dashboard
        </a>
        {/* <a
          href="/admin/orders"
          className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Orders
        </a> */}
        <a
          href="/admin/menu"
          className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Menu Management
        </a>
        {/* <a
          href="/inventory"
          className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Inventory
        </a>
        <a
          href="/analytics"
          className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Analytics
        </a>
        <a
          href="/settings"
          className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Settings
        </a> */}
      </nav>
      <div className="border-t border-gray-800 py-4 px-6">
        <button className="w-full bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded-lg"
        onClick={handleLogout}
        >
          Logout
        </button>
      </div>

    </div>
  );
};

export default AdminSidebar;
