import React from "react";
import "../main/Main.css";
import LandingButton from "../../Components/landingbutton/LandingButton";
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
          // onClick={() => navigate("/")}
          onClick={() => (window.location.href = "")}
          className="main-logo"
        />
      </div>
      <div className="main-app">
        <div className="main-page-content">
          <h1 className="main-page-title">Tourism4Food</h1>
          <LandingButton label="Website" onClick={() => navigate("/home")} />
          <LandingButton
            label="Instagram"
            onClick={() =>
              window.open("https://www.instagram.com/tourism4food/", "_blank")
            }
          />
          <LandingButton
            label="Youtube"
            onClick={() =>
              window.open("https://www.youtube.com/@tourism4fooduk", "_blank")
            }
          />
          <LandingButton
            label="Whatsapp"
            onClick={() => window.open("", "_blank")}
          />
          <LandingButton
            label="Tiktok"
            onClick={() =>
              window.open(
                "https://www.tiktok.com/@tourism4food?is_from_webapp=1&sender_device=pc",
                "_blank"
              )
            }
          />
          <LandingButton
            label="Email Us"
            onClick={() => ((window.location.href = ""), "_blank")}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
