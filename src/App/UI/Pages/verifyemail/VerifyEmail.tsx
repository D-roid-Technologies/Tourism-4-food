import React from "react";
import { Assets } from "../../../Utils/constant/Assets";
import "../../../../App.css";
import "./VerifyEmail.css";

const VerifyEmail: React.FC = () => {
  return (
    <div className="verifyemail__container">
      <section>
        <div className="verifyemail__content">
          <div className="verify__img">
            <img src={Assets.images.verifyImage} alt="" />
          </div>
          <h2>verify your email</h2>
        </div>
      </section>
    </div>
  );
};

export default VerifyEmail;
