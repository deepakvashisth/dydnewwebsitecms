import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./layout/Footer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [appsidebarcollapse, setAppSidebarCollapse] = useState(false);
  const handleSidebarCollapse = () => {
    setAppSidebarCollapse((prev) => !prev);
  };

  return (
    <div
      className={[
        "app-wrapper app-sidebar-fixed app-header-fixed app",
        sidebarOpen ? "app-sidebar-mobile-open" : "",
        appsidebarcollapse ? "app-sidebar-collapsed" : "",
      ].join(" ")}
    >
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        appsidebarcollapse={handleSidebarCollapse}
      />
      <div className="app-header navbar_reverse app-header--shadow">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      <div className="main-content app-content">
        <div className="app-content--inner app_content_gradient">
          <div className="app-content--inner__wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
