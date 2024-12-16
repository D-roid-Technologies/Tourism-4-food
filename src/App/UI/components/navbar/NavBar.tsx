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
    title: "Our Programs",
    // title: "About Us",
    description: "",
    submenu: [
      { label: "ComeEAT", path: "/programs#comeeat" },
      { label: "CoachMe", path: "/programs#coachme" },
      { label: "Community Franchise", path: "" },

      // { label: "History", path: "/aboutus#history" },
      // { label: "Achievements", path: "/aboutus#achievements" },
      // { label: "Team Profile", path: "/aboutus#team" },
      // { label: "Executive Summary", path: "/aboutus" },
    ],
  },
  {
    title: "Our Services",
    // title: "Company",
    description: "",
    submenu: [
      { label: "Training and Coaching", path: "" },
      { label: "Consultancy Services", path: "" },

      // { label: "Resources", path: "/resources" },
      // { label: "Programs", path: "/programs" },
      // { label: "Campaigns", path: "/campaigns" },
      // { label: "Legal", path: "/legal" },
    ],
  },
  {
    title: "Our Campaigns",
    // title: "Activities",
    description: "",
    submenu: [
      { label: "Pro poor Tourism", path: "" },
      { label: "Say No To Dirty Kitchen", path: "/campaigns#dirtykitchen" },
      { label: "Just a wee tip", path: "/campaigns#justweetip" },
      { label: "My kindness Diary", path: "" },
      { label: "Under the service smile", path: "" },

      // { label: "Book Event", path: "/login" },
      // { label: "Book Travels", path: "/login" },
      // { label: "Book Tours", path: "/login" },
      // { label: "Consultancy Service", path: "/login" },
      // { label: "Shop for Tourism Products", path: "login" },
    ],
  },
  {
    title: "Our Event",
    // title: "Get Involved",
    description: "",
    submenu: [
      { label: "Our Webinars", path: "" },
      { label: "Lecture Series", path: "" },
      { label: "Our Activities", path: "" },

      // { label: "Volunteer", path: "/volunteer" },
      // { label: "Donate", path: "/getinvolved#donate" },
      // { label: "Parner with Us", path: "/getinvolved#partner" },
      // { label: "Cooperate Engagement", path: "/getinvolved#engagement" },
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
    title: "Contact Us",
    description: "",
    submenu: [
      // { label: "General Inquiries", path: "" },
      // { label: "Volunteer Oppurtunities", path: "" },
      // { label: "Media Inquiries", path: "" },
      // { label: "Partnerships", path: "" },
      { label: "Contact Form", path: "/contact" },
      { label: "FAQ", path: "/contact#faq" },
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
      {/* <button className="login-button" onClick={() => navigate("/login")}>
        Log In
      </button> */}
      <button className="login-button" onClick={() => navigate("/login")}>
        Log In
      </button>
    </nav>
  );
};

export default Navbar;
