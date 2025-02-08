
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurMenu from "./pages/OurMenu";
import AuthPopups from "./popups/AuthPopups";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import OurBusiness from "./pages/OurBusiness";
import AdminSidebar from "./components/AdminSidebar";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import MenuManagement from "./pages/adminpages/MenuManagement";
import AdminOrders from "./pages/adminpages/AdminOrders";
import AdminProtectedRoutes from "./util/AdminProtectedRoutes";


function App() {
  const [isAuthPopupsOpen, setIsAuthPopupsOpen] = useState(false);
  const [authPopupType, setAuthPopupType] = useState("login"); // 'login' or 'signup'
  const userRole = localStorage.getItem("userRole");

  const HomePage = () => (
    <main className="flex flex-col">
      <section id="landing" className="w-full">
        <LandingPage
          setIsAuthPopupsOpen={setIsAuthPopupsOpen}
          setAuthPopupType={setAuthPopupType}
        />
      </section>
      <section id="our-menu" className="w-full">
        <OurMenu />
      </section>
      <section id="our-business" className="w-full">
        <OurBusiness />
      </section>
      {/* <section id="reviews" className="w-full">
        <Reviews />
      </section> */}
      <section id="contact" className="w-full">
        <Contact />
      </section>
    </main>
  );

  const AdminLayout = () => (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar setIsAuthPopupsOpen={setIsAuthPopupsOpen} />

      {/* Main Content */}
      <div className="flex-1 p-4 bg-black overflow-auto">
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="menu" element={<MenuManagement />} />
          <Route path="orders" element={<AdminOrders />} />
        </Routes>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="h-full bg-black bg-theme-bg bg-cover bg-center">
        {userRole !== "admin" && <Navbar setIsAuthPopupsOpen={setIsAuthPopupsOpen} />}

        <Routes>
          {/* Home SPA */}
          <Route path="/" element={<HomePage />} />

          {/* Multi-Page Routes */}
          <Route path="/our-menu" element={<OurMenu />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-business" element={<OurBusiness />} />

          {/* Admin Protected Routes */}
          <Route path="/admin/*" element={<AdminProtectedRoutes />}>
            <Route path="*" element={<AdminLayout />} />
          </Route>

          {/* Waiter Protected Routes */}
          {/* <Route path="/waiter/*" element={<WaiterProtectedRoutes />}>
            <Route path="our-menu" element={<OurMenu />} />
          </Route> */}

        </Routes>

        {/* Authentication Popups */}
        <AuthPopups
          isOpen={isAuthPopupsOpen}
          setIsAuthPopupsOpen={setIsAuthPopupsOpen}
          popupType={authPopupType}
          setPopupType={setAuthPopupType}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
