import React from 'react';

const Navbar = ({ setIsAuthPopupsOpen }) => {

  const userRole = localStorage.getItem("userRole");
  
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
          placeholder="Search foods"
        />
        <button className="bg-[#EF4B25] text-white p-2 rounded-md hover:bg-[#a91c1c] transition-colors">
          Search
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
      {userRole !== "waiter" && (
        <>
        <a
          href="#landing" 
          className="text-sm text-gray-300 hover:text-[#d32323] border-b-2 border-transparent hover:border-[#d32323] transition-all"
        >
          Home
        </a>
        <a
          href="#our-menu" 
          className="text-sm text-gray-300 hover:text-[#d32323] border-b-2 border-transparent hover:border-[#d32323] transition-all"
        >
          Our Menu
        </a>
        <a
          href="#our-business"
          className="text-sm text-gray-300 hover:text-[#d32323] border-b-2 border-transparent hover:border-[#d32323] transition-all"
        >
          About Us
        </a>
        <a
          href="#reviews"
          className="text-sm text-gray-300 hover:text-[#d32323] border-b-2 border-transparent hover:border-[#d32323] transition-all"
        >
          Reviews
        </a>
        <a
          href="#contact"
          className="text-sm text-gray-300 hover:text-[#d32323] border-b-2 border-transparent hover:border-[#d32323] transition-all"
        >
          Contact
        </a>
        </>
      )}
      
        <button
          onClick={() => setIsAuthPopupsOpen(true)}
          className="bg-[#EF4B25] text-white p-2 rounded-md hover:bg-[#a91c1c] transition-colors"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
