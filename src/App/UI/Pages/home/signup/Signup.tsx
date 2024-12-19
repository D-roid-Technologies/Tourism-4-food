import React, { useState } from "react";
// import "../login/Login.css";
import "../signup/Signup.css";
import { Assets } from "../../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { UserType } from "../../../../Utils/Types";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { authFunctions } from "../../../../Redux/authFunctions/Auth.functions";

const Signup: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [fieldStatus, setFieldStatus] = useState({
    email: { message: "", isValid: false },
    password: { message: "", isValid: false },
    confirmPassword: { message: "", isValid: false },
  });
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

  const validateForm = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

    const newFieldStatus = {
      email: {
        message: emailRegex.test(email)
          ? "Email accepted"
          : "Invalid email address",
        isValid: emailRegex.test(email),
      },
      password: {
        message: passwordRegex.test(password)
          ? "Password accepted"
          : "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character",
        isValid: passwordRegex.test(password),
      },
      confirmPassword: {
        message:
          password === confirmPassword
            ? "Passwords match"
            : "Passwords do not match",
        isValid: password === confirmPassword && passwordRegex.test(password),
      },
    };

    setFieldStatus(newFieldStatus);
    return Object.values(newFieldStatus).every((field) => field.isValid);
  };

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please ensure all fields are valid before submitting.");
      return;
    }
    await authFunctions
      .handleUserSignUp(userData)
      .then((response) => {
        // console.log(response);
        // navigate("/verifyemail");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div>
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
                {fieldStatus.email.message && (
                  <span>{fieldStatus.email.message}</span>
                )}
              </div>

              <div
                className="login-form-group"
                style={{ position: "relative" }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  style={{ paddingRight: "30px" }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle-icon"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? (
                    <FaEye style={{ color: "black", fontSize: "20px" }} />
                  ) : (
                    <FaEyeSlash style={{ color: "black", fontSize: "20px" }} />
                  )}{" "}
                </span>
                {fieldStatus.password.message && (
                  <span>{fieldStatus.password.message}</span>
                )}
              </div>

              <div className="login-form-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="login-input"
                />
                {fieldStatus.confirmPassword.message && (
                  <span>{fieldStatus.confirmPassword.message}</span>
                )}
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
