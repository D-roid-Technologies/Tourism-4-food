import React, { useState } from "react";
import "../navbar/NavBar.css";
import { Assets } from "../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  title: string;
  submenu: string[];
  description: string;
}

const menuItems: MenuItem[] = [
  {
    title: "About Us",
    description: "Brief about Tourism4food",
    submenu: ["History", "Achievements", "Team Profile", "Executive Summary"],
  },
  {
    title: "Company",
    description: "Brief about what Tourism4food has done",
    submenu: ["Programs", "Campaigns", "Resources", "Legal"],
  },
  {
    title: "Activities",
    description: "",
    submenu: ["Activity 1", "Activity 2", "Activity 3"],
  },
  {
    title: "Get Involved",
    description: "",
    submenu: ["Volunteer", "Donate", "Participate"],
  },
  {
    title: "Contact Us",
    description: "",
    submenu: ["Contact Form", "FAQ"],
  },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src={Assets.images.companyLogo} alt="Tourism4Food Logo" />
      </div>
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item.title}
            className="navbar-item"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`menu-button ${
                activeMenu === item.title ? "active" : ""
              }`}
            >
              {item.title} <span>▼</span>
            </button>
            {activeMenu === item.title && (
              <div className="dropdown">
                <p className="dropdown-description">{item.description}</p>
                <ul className="dropdown-menu">
                  {item.submenu.map((subitem) => (
                    <li key={subitem} className="dropdown-item">
                      {subitem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button className="login-button">Log In</button>
    </nav>
  );
};

export default Navbar;
