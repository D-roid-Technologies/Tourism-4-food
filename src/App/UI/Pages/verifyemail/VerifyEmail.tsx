import React from "react";
import { Assets } from "../../../Utils/constant/Assets";
import "../verifyemail/VerifyEmail.css";
import Button from "../../components/button/Button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const VerifyEmail: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="verifyemail__container">
      <div className="main__logo__container">
        <img
          src={Assets.images.companyLogo}
          alt="Tourism4Food Logo"
          // onClick={() => navigate("/")}
          onClick={() => (window.location.href = "/home")}
          className="main__logo"
        />
      </div>
      <span className="bottom__btn">
        <MdKeyboardArrowLeft />
      </span>
      <div>
        <div className="verifyemail__content">
          <div className="verify__img">
            <img src={Assets.images.verifyImage} alt="" />
          </div>
          <h2>Verify your email</h2>
          <p>
            We sent a verification email to jonnymatt@gmail.com. Check your
            inbox for next steps
            {/* (use email passed from sign up page here) */}
          </p>
          <Button label="Continue" onClick={() => navigate("/entercode")} />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
