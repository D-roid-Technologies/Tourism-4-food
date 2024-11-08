import React, { useState } from "react";
import "../login/Login.css";
import { Assets } from "../../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        {/* <Navbar /> */}
        <div className="login-nav">
          <div className="login-navbar-logo" onClick={() => navigate("/home")}>
            <img src={Assets.images.companyLogo} alt="Tourism4Food Logo" />
          </div>
        </div>
        {/* BACK BUTTON */}
        <div className="form-project-container">
          <button onClick={() => navigate("")} className="form-btn-hero">
            <IoChevronBackOutline className="form-back-btn-icon" />
          </button>
          <div>
            <p>
              Don’t have an account? &nbsp;
              <span
                className="create-color"
                onClick={() => navigate("/onboarding")}
              >
                Create an account.
              </span>
            </p>
          </div>
        </div>
        {/* login section */}
        <div className="login-container">
          <div className="login-left">
            <img
              src={Assets.images.loginIllustrator}
              alt="Login illustration"
            />
          </div>

          <div className="login-right">
            <div className="login-header">
              <h1>Welcome back 👋</h1>
              <p>Welcome, put in your account information to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="login-forms">
              <h3>Login</h3>

              <div className="login-form-group">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                />
              </div>
              <div className="login-form-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  // maxLength={50}
                />
                <a href="/forgot-password" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              <div className="divider">
                <span>Or</span>
              </div>

              <div className="social-login">
                <button type="button" className="google-btn">
                  <img src={Assets.images.googleLogo} alt="Google" />
                </button>
                <button type="button" className="facebook-btn">
                  <img src={Assets.images.facebookLogo} alt="Facebook" />
                </button>
                <button type="button" className="apple-btn">
                  <img src={Assets.images.appleLogo} alt="Apple" />
                </button>
              </div>

              <div className="login-btn-container">
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>

              {/* <p className="signup-prompt">
                Don't have an account? <a href="/signup">Create an account.</a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
