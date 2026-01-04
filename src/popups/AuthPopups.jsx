
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPopups = ({ isOpen, setIsAuthPopupsOpen, popupType, setPopupType }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    let role = '';
    if (email === 'admin@gmail.com' && password === 'admin123') {
      role = 'admin';
      navigate("/admin/dashboard");
    // } else if (email === 'waiter@gmail.com' && password === 'waiter123') {
    //   role = 'waiter';
    //   navigate('/our-menu');
    } else if (email === 'customer@gmail.com' && password === 'customer123') {
      role = 'customer';
    }

    if (role) {
      localStorage.setItem('userRole', role);
      setIsAuthPopupsOpen(false);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-customBlack1 p-8 rounded-lg shadow-lg max-w-sm w-full relative">
        {/* Close Button */}
        <button
          onClick={() => setIsAuthPopupsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {popupType === 'signup' ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Create Account</h2>
            <form>
              {/* Signup Form */}
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full text-gray-950 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-100"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full text-gray-950 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-100"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full text-gray-950 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-100"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-customBlue1">
                Create Account
              </button>
            </form>
            <p className="text-sm text-center text-gray-500 mt-4">
              Already have an account?{' '}
              <span
                onClick={() => setPopupType('login')}
                className="text-customBlue2 hover:underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              {/* Login Form */}
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full text-gray-950 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-100"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full text-gray-950 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-100"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-customBlue1">
                Login
              </button>
            </form>
            <p className="text-sm text-center text-gray-500 mt-4">
              Don't have an account?{' '}
              <span
                onClick={() => setPopupType('signup')}
                className="text-customBlue2 hover:underline cursor-pointer"
              >
                Create one here
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPopups;
