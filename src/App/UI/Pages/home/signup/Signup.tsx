import React, { useState } from "react";
// import "../login/Login.css";
import "../signup/Signup.css";
import { Assets } from "../../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { UserType } from "../../../../Utils/Types";
import { authFunctions } from "../../../../Redux/authFunctions/Auth.functions";

const Signup: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const userData = {
    fullName: fullName,
    email: email,
    password: password,
    countryInfo: {
      name: "",
      iso: "",
      flag: "",
    },
  };

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    await authFunctions
      .handleUserSignUp(userData)
      .then((reponse) => {
        // console.log(reponse);
        // navigate("/verifyemail");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>
        {/* <Navbar /> */}
        {/* <div className="login-nav">
          <div className="login-navbar-logo" onClick={() => navigate("/home")}>
            <img src={Assets.images.companyLogo} alt="Tourism4Food Logo" />
          </div>
        </div> */}
        {/* BACK BUTTON */}
        <div className="form-project-container">
          <button onClick={() => navigate("/home")} className="form-btn-hero">
            <IoChevronBackOutline className="form-back-btn-icon" />
          </button>
          <div>
            <p>
              Already have an account? &nbsp;
              <span className="create-color" onClick={() => navigate("/login")}>
                Login
              </span>
            </p>
          </div>
        </div>
        {/* login section */}
        <div className="login-container">
          <div className="login-left">
            <img
              src={Assets.images.signupPageIllustrator}
              alt="Login illustration"
            />
          </div>

          <div className="login-right">
            <div className="login-header">
              <h1>Create your account</h1>
            </div>

            <form onSubmit={registerUser} className="login-forms">
              <h3>Sign up</h3>

              <div className="login-form-group">
                <input
                  type="text"
                  placeholder="Emeka Ebuka Eke"
                  // value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="login-input"
                />
              </div>
              <div className="login-form-group">
                <input
                  type="email"
                  placeholder="Enter Email"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                />
              </div>
              <div className="login-form-group">
                <input
                  type="password"
                  placeholder="Password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                />
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
                  Sign up
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

export default Signup;
