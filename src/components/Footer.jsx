import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customBlack1 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Our Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Our menus</li>
            <li>Our burgers</li>
            <li>Our times sides</li>
            <li>Our naandwiches</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Legal Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Legal Notice</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Contacts</li>
            <li>Our addresses</li>
            <li>Become a Times Square franchisee</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">We Accept</h3>
          <div className="flex space-x-4">
            <img
              src="path/to/mastercard-logo.png"
              alt="Mastercard"
              className="w-10 h-6 object-contain"
            />
            <img
              src="path/to/visa-logo.png"
              alt="Visa"
              className="w-10 h-6 object-contain"
            />
            <img
              src="path/to/amex-logo.png"
              alt="American Express"
              className="w-10 h-6 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-discord"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2024 Nayef All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
