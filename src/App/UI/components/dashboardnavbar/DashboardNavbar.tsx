import React from "react";
import "../dashboardnavbar/DashboardNavbar.css";
import { Assets } from "../../../Utils/constant/Assets";

const DashboardNavbar: React.FunctionComponent = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="dashboardlogo">
          <img src={Assets.images.companyLogo} alt="Logo" />
        </div>
        <nav className="nav-menu">
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Book</div>
          <div className="nav-item">My Donations</div>
          <div className="nav-item">My Volunteering</div>
          <div className="nav-item">Blog</div>
          <div className="nav-item">Account Settings</div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNavbar;
