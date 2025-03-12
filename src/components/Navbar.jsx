
import React, { useState } from 'react';

const Navbar = ({ setIsAuthPopupsOpen }) => {
  const userRole = localStorage.getItem("userRole");
  const [activeLink, setActiveLink] = useState("home"); // State to track the active link

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActiveLink(link); // Update the active link state
  };

  return (
    <nav className="flex justify-between items-center bg-transparent p-4 shadow-lg font-sans h-[100px] fixed top-0 left-0 w-full z-10 backdrop-blur-lg">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <a href="#landing">
            <img
              src="/veg_logo.png"
              alt="Logo"
              className="h-[80px] w-auto"
            />
          </a>
        </div>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 text-sm w-[200px]"
          placeholder="Search vegetables"
        />
        <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 transition-colors">
          Search
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {userRole !== "waiter" && (
          <>
            <a
              href="#landing"
              onClick={() => handleLinkClick("home")}
              className={`text-sm text-gray-300 hover:text-green-500 border-b-2 ${
                activeLink === "home" ? "border-green-500" : "border-transparent"
              } hover:border-green-500 transition-all`}
            >
              Home
            </a>
            <a
              href="#our-menu"
              onClick={() => handleLinkClick("menu")}
              className={`text-sm text-gray-300 hover:text-green-500 border-b-2 ${
                activeLink === "menu" ? "border-green-500" : "border-transparent"
              } hover:border-green-500 transition-all`}
            >
              Our Menu
            </a>
            <a
              href="#our-business"
              onClick={() => handleLinkClick("about")}
              className={`text-sm text-gray-300 hover:text-green-500 border-b-2 ${
                activeLink === "about" ? "border-green-500" : "border-transparent"
              } hover:border-green-500 transition-all`}
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick("contact")}
              className={`text-sm text-gray-300 hover:text-green-500 border-b-2 ${
                activeLink === "contact" ? "border-green-500" : "border-transparent"
              } hover:border-green-500 transition-all`}
            >
              Contact
            </a>
          </>
        )}

        <button
          onClick={() => setIsAuthPopupsOpen(true)}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;