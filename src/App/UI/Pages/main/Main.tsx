import React from "react";
import "../main/Main.css";
import LandingButton from "../../components/landingbutton/LandingButton";
import { Assets } from "../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page-container">
      <div className="main-logo-container">
        <img
          src={Assets.images.companyLogo}
          alt="Tourism4Food Logo"
          onClick={() => navigate("/")}
          className="main-logo"
        />
      </div>
      <div className="main-app">
        <div className="main-page-content">
          <h1 className="main-page-title">Tourism4Food</h1>
          <LandingButton label="Website" onClick={() => navigate("/home")} />
          <LandingButton label="Instagram" />
          <LandingButton label="Youtube" />
          <LandingButton label="Whatsapp" />
          <LandingButton label="tourism4food@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Main;
