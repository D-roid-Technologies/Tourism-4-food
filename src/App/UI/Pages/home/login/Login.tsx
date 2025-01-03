import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { Assets } from "../../../../Utils/constant/Assets";
import AppInput from "../../../components/appinput/AppInput";
import { validateEmail, validatePassword } from "../signup/Signup";
import Spinner from "../../../components/spinner/Spinner";
import "../login/Login.css";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [fieldStatus, setFieldStatus] = useState({
    email: { message: "", isValid: false },
    password: { message: "", isValid: false },
  });

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const validation = validateEmail(emailValue);
    setFieldStatus((prev) => ({ ...prev, email: validation }));
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    const validation = validatePassword(passwordValue);
    setFieldStatus((prev) => ({ ...prev, password: validation }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fieldStatus.email.isValid && fieldStatus.password.isValid) {
      setLoading(true);
      setTimeout(() => {
        navigate("/dashboard");
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div>
      {loading && <Spinner />}
      <div>
        {/* BACK BUTTON */}
        <div className="form-project-container">
          <button onClick={() => navigate("/home")} className="form-btn-hero">
            <IoChevronBackOutline className="form-back-btn-icon" />
          </button>
          <div></div>
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
              <p style={{ color: "#333" }}>
                Welcome, put in your account information to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-forms">
              <h3 className="login-heading">Login</h3>

              <div className="login-form-group">
                <AppInput
                  type="email"
                  placeholder="Enter Email"
                  variant="standard"
                  value={email}
                  onChange={handleEmailChange}
                  error={!fieldStatus.email.isValid}
                  helperText={fieldStatus.email.message}
                  errorColor={fieldStatus.email.isValid ? "green" : "red"}
                  // className="login-input"
                />
              </div>
              <div className="login-form-group">
                <AppInput
                  type="password"
                  placeholder="Password"
                  variant="standard"
                  value={password}
                  onChange={handlePasswordChange}
                  error={!fieldStatus.password.isValid}
                  helperText={fieldStatus.password.message}
                  errorColor={fieldStatus.password.isValid ? "green" : "red"}

                  // className="login-input"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 20px 0 0",
                  }}
                >
                  <span
                    className="create-color"
                    onClick={() => navigate("/onboarding")}
                  >
                    Create an account.
                  </span>
                  <a href="/forgot-password" className="forgot-password">
                    Forgot password?
                  </a>
                </div>
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

              <div className="login-btn-container-two">
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
