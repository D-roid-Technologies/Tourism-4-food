import React, { useState } from "react";
import "../navbar/NavBar.css";
import { Assets } from "../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

interface MenuItem {
  title: string;
  submenu: { label: string; path: string }[];
  description: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Our Programs",
    description: "",
    submenu: [
      { label: "ComeEAT", path: "/programs#comeeat" },
      { label: "CoachMe", path: "/programs#coachme" },
      { label: "Community Franchise", path: "" },
    ],
  },
  {
    title: "Our Services",
    description: "",
    submenu: [
      { label: "Training and Coaching", path: "" },
      { label: "Consultancy Services", path: "" },
      { label: "Donate", path: "/getinvolved#donate" },
      { label: "Legal", path: "/legal" },
      { label: "Resources", path: "/resources" },
      { label: "Volunteer", path: "/volunteer" },
      { label: "Parner with Us", path: "/getinvolved#partner" },
      { label: "Cooperate Engagement", path: "/getinvolved#engagement" },
    ],
  },
  {
    title: "Our Campaigns",
    description: "",
    submenu: [
      { label: "Pro poor Tourism", path: "" },
      { label: "Say No To Dirty Kitchen", path: "/campaigns#dirtykitchen" },
      { label: "Just a wee tip", path: "/campaigns#justweetip" },
      { label: "My kindness Diary", path: "" },
      { label: "Under the service smile", path: "" },
    ],
  },
  {
    title: "Our Event",
    description: "",
    submenu: [
      { label: "Our Webinars", path: "" },
      { label: "Lecture Series", path: "" },
      { label: "Our Activities", path: "" },
    ],
  },
  {
    title: "Media",
    description: "",
    submenu: [
      { label: "Our Products", path: "" },
      { label: "Magazine", path: "" },
      { label: "TV", path: "" },
    ],
  },
  {
    title: "More",
    description: "",
    submenu: [
      { label: "History", path: "/aboutus#history" },
      { label: "Achievements", path: "/aboutus#achievements" },
      { label: "Team Profile", path: "/aboutus#team" },
      { label: "Executive Summary", path: "/aboutus" },
      { label: "Contact Form", path: "/contact" },
      { label: "FAQ", path: "/contact#faq" },
    ],
  },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleSubmenuClick = (path: string) => {
    setMenuOpen(false); // Close menu on click
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
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>
      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
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
        <div className="logo_small">
          <button className="login-button" onClick={() => navigate("/login")}>
            Log In
          </button>
        </div>
      </ul>
      <div className="logo_big">
        <button className="login-button" onClick={() => navigate("/login")}>
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
