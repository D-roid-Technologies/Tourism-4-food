import React, { useState } from "react";
import "../navbar/NavBar.css";
import { Assets } from "../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  title: string;
  submenu: { label: string; path: string }[];
  description: string;
}

const menuItems: MenuItem[] = [
  {
    title: "About Us",
    description: "",
    submenu: [
      { label: "History", path: "/aboutus#history" },
      { label: "Achievements", path: "/aboutus#achievements" },
      { label: "Team Profile", path: "/aboutus#team" },
      { label: "Executive Summary", path: "/aboutus" },
    ],
  },
  {
    title: "Company",
    description: "",
    submenu: [
      { label: "Resources", path: "/getinvolved" },
      { label: "Programs", path: "/programs" },
      { label: "Campaigns", path: "/campaigns" },
      { label: "Legal", path: "/legal" },
    ],
  },
  {
    title: "Activities",
    description: "",
    submenu: [
      { label: "Activity 1", path: "/activity-1" },
      { label: "Activity 2", path: "/activity-2" },
      { label: "Activity 3", path: "/activity-3" },
    ],
  },
  {
    title: "Get Involved",
    description: "",
    submenu: [
      { label: "Volunteer", path: "/volunteer" },
      { label: "Donate", path: "/donate" },
      { label: "Participate", path: "/participate" },
    ],
  },
  {
    title: "Contact Us",
    description: "",
    submenu: [
      { label: "Contact Form", path: "/contact-form" },
      { label: "FAQ", path: "/faq" },
    ],
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

  const handleSubmenuClick = (path: string) => {
    if (path.includes("#")) {
      const [basePath, anchor] = path.split("#");
      navigate(basePath, { state: { scrollTo: anchor } });
    } else {
      navigate(path);
    }
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
                    <li
                      key={subitem.label}
                      className="dropdown-item"
                      onClick={() => handleSubmenuClick(subitem.path)}
                    >
                      {subitem.label}
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
