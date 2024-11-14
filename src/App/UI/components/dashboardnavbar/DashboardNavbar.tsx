import React from "react";
import "../dashboardnavbar/DashboardNavbar.css";
import { Assets } from "../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";

interface DashboardNavbarProps {
  activeItem: string;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ activeItem }) => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="dashboardlogo">
        <img src={Assets.images.companyLogo} alt="Logo" />
      </div>
      <nav className="nav-menu">
        <div
          onClick={() => navigate("/userdashboard")}
          className={`nav-item ${activeItem === "Dashboard" ? "active" : ""}`}
        >
          Dashboard
        </div>
        <div
          onClick={() => navigate("/userbook")}
          className={`nav-item ${activeItem === "Book" ? "active" : ""}`}
        >
          Book
        </div>
        <div
          className={`nav-item ${
            activeItem === "My Donations" ? "active" : ""
          }`}
        >
          My Donations
        </div>
        <div
          className={`nav-item ${
            activeItem === "My Volunteering" ? "active" : ""
          }`}
        >
          My Volunteering
        </div>
        <div className={`nav-item ${activeItem === "Blog" ? "active" : ""}`}>
          Blog
        </div>
        <div
          className={`nav-item ${
            activeItem === "Account Settings" ? "active" : ""
          }`}
        >
          Account Settings
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
