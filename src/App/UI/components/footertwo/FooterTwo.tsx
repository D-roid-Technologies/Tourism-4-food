import React from "react";
import "../footertwo/FooterTwo.css";

const FooterTwo: React.FunctionComponent = () => {
  return (
    <footer className="footer-two">
      <div className="footer-two-content">
        <p>©2024 TOURISM4FOOD</p>
        <p className="droid-link">
          <a href="https://www.droidtechinternational.com/" target="blank">
            BUILT BY D'ROID TECHNOLOGIES
          </a>
        </p>
        <p className="tforfood-link">
          <a href="">PRIVACY POLICY </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterTwo;
