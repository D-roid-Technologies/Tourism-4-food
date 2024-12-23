import React, { useState, useEffect } from "react";
import "../signup/Signup.css";
import { Assets } from "../../../../Utils/constant/Assets";
import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { UserType } from "../../../../Utils/Types";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { authFunctions } from "../../../../Redux/authFunctions/Auth.functions";
import AppInput from "../../../components/appinput/AppInput";
import { useAppEntry } from "../../../../Utils/hooks";
import Button from "../../../components/button/Button";
import Modal from "../../../components/modal/Modal";
import Spinner from "../../../components/spinner/Spinner";

type CountryData = {
  name: string;
  iso2: string;
  dial_code: string;
  flag: string;
};
export const validateEmail = (email: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return {
    message: emailRegex.test(email)
      ? "Email accepted"
      : "Invalid email address",
    isValid: emailRegex.test(email),
    errorColor: emailRegex.test(email) ? "green" : "red",
  };
};

export const validatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
  return {
    message: passwordRegex.test(password)
      ? "Password accepted"
      : "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character",
    isValid: passwordRegex.test(password),
    errorColor: passwordRegex.test(password) ? "green" : "red",
  };
};

const Signup: React.FunctionComponent = () => {
  // const { showModal } = useAppEntry();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [country, setCountry] = useState<object | null>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [fieldStatus, setFieldStatus] = useState({
    email: { message: "", isValid: false },
    password: { message: "", isValid: false },
    fullName: { message: "", isValid: false },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (res) => {
      const geoApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${res.coords.latitude}&longitude=${res.coords.longitude}&localityLanguage=en`;
      await fetch(geoApi)
        .then((res) => res.json())
        .then((data) => {
          setCountry(data);
        });
    });
  }, []);

  const userData = {
    fullName: fullName,
    email: email,
    password: password,
    countryInfo: country,
  };

  // FORM VALIDATION
  //  Took Email and Password function up because of the export for login validation

  const validateFullName = (fullName: string) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return {
      message: nameRegex.test(fullName)
        ? "Name accepted"
        : "Invalid name, only letters and spaces are allowed",
      isValid: nameRegex.test(fullName),
      errorColor: nameRegex.test(fullName) ? "green" : "red",
    };
  };

  const newFieldStatus = {
    email: validateEmail(email),
    password: validatePassword(password),
    fullName: validateFullName(fullName),
  };

  const allValid: boolean =
    newFieldStatus.email.isValid === true &&
    newFieldStatus.fullName.isValid &&
    newFieldStatus.password.isValid;

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (allValid) {
      await authFunctions
        .handleUserSignUp(userData)
        .then(() => {
          // navigate("/dashboard");
          setLoading(true);
          setTimeout(() => {
            navigate("/dashboard");
            setLoading(false);
          }, 2000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setShowModal(true);
      return;
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
          <div>
            <p>
              <span style={{ color: "#666666" }}>
                Already have an account? &nbsp;
              </span>
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
              <h3 className="sign-up-heading">Sign up</h3>
              <div style={{ paddingTop: "0", paddingBottom: "0" }}>
                <AppInput
                  // name="fullName"
                  type="text"
                  placeholder="Emeka Ebuka Eke"
                  variant="standard"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  error={newFieldStatus.fullName.isValid}
                  helperText={newFieldStatus.fullName.message}
                  errorColor={newFieldStatus.fullName.errorColor}
                />
              </div>
              <AppInput
                type="email"
                placeholder="Enter Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={newFieldStatus.email.isValid}
                helperText={newFieldStatus.email.message}
                errorColor={newFieldStatus.email.errorColor}
              />

              <div
                className="login-form-group"
                style={{ position: "relative" }}
              >
                <AppInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  variant="standard"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={newFieldStatus.password.isValid}
                  helperText={newFieldStatus.password.message}
                  errorColor={newFieldStatus.password.errorColor}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle-icon"
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "40%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? (
                    <FaEye style={{ color: "black", fontSize: "16px" }} />
                  ) : (
                    <FaEyeSlash style={{ color: "black", fontSize: "16px" }} />
                  )}{" "}
                </span>
                {fieldStatus.password.message && (
                  <span>{fieldStatus.password.message}</span>
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

              <div className="login-btn-container-two">
                <button type="submit" className="login-btn mb-10">
                  Sign up
                </button>
              </div>
            </form>

            <div>
              {/* Using the external Modal component */}
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <p className="validate-modal">
                  Please fill in all fields before signing up.
                </p>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
