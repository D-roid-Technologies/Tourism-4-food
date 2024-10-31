import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="#">Book</a>
            </li>
            <li>
              <a href="#">Tour</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get Involved</h4>
          <ul>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Volunteer</a>
            </li>
            <li>
              <a href="#">Partner with Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-language">
          <a href="#">🌐 English</a>
        </div>

        <div className="footer-section footer-subscribe">
          <h4>Subscribe and keep up with us</h4>
          <form>
            <div className="input-name">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            <input type="email" placeholder="Email" required />
            <button type="submit">Book now</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>COPYRIGHT © 2024 TOURISM4FOOD</p>
        <p>BUILT BY DROID TECHNOLOGIES</p>
        <a href="#">PRIVACY POLICY</a>
      </div>
    </footer>
  );
};

export default Footer;
