import React, { useState, useEffect } from "react";
import "../signup/Signup.css";
import { Assets } from "../../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { UserType } from "../../../../Utils/Types";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { authFunctions } from "../../../../Redux/authFunctions/Auth.functions";
import AppInput from "../../../components/appinput/AppInput";
import { useAppEntry } from "../../../../Utils/hooks";
// import { useAppEntry } from "../../../../Utils/hooks/UseAppEntry";

// const newFieldStatus: {
//   email: {
//     message: string;
//     isValid: boolean;
//   };
//   password: {
//     message: string;
//     isValid: boolean;
//   };

//   fullName: {
//     message: string;
//     isValid: boolean;
//   };
// };

type CountryData = {
  name: string;
  iso2: string;
  dial_code: string;
  flag: string;
};

const Signup: React.FunctionComponent = () => {
  const { showModal } = useAppEntry();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const [fieldStatus, setFieldStatus] = useState({
    email: { message: "", isValid: false },
    password: { message: "", isValid: false },
    fullName: { message: "", isValid: false },
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
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null
  );

  const fetchCountries = async () => {
    try {
      const flagResponse = await fetch(
        "https://countriesnow.space/api/v0.1/countries/flag/images"
      );
      const flagData = await flagResponse.json();

      const codeResponse = await fetch(
        "https://countriesnow.space/api/v0.1/countries/codes"
      );
      const codeData = await codeResponse.json();

      if (
        flagData.error === false &&
        Array.isArray(flagData.data) &&
        codeData.error === false &&
        Array.isArray(codeData.data)
      ) {
        const mergedData = flagData.data.map((flagCountry: { name: any }) => {
          const codeCountry = codeData.data.find(
            (c: { name: any }) => c.name === flagCountry.name
          );
          return {
            ...flagCountry,
            dial_code: codeCountry ? codeCountry.dial_code : "",
            iso2: codeCountry ? codeCountry.code : "",
          };
        });
        setCountries(mergedData);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleCountrySelect = (country: CountryData) => {
    setSelectedCountry(country);
  };

  // FORM VALIDATION
  const validateEmail = (email: string) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return {
      message: emailRegex.test(email)
        ? "Email accepted"
        : "Invalid email address",
      isValid: emailRegex.test(email),
    };
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    return {
      message: passwordRegex.test(password)
        ? "Password accepted"
        : "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character",
      isValid: passwordRegex.test(password),
    };
  };

  const validateFullName = (fullName: string) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return {
      message: nameRegex.test(fullName)
        ? "Name accepted"
        : "Invalid name, only letters and spaces are allowed",
      isValid: nameRegex.test(fullName),
    };
  };

  const validateForm = () => {
    const newFieldStatus = {
      email: validateEmail(email),
      password: validatePassword(password),
      fullName: validateFullName(fullName),
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
              <span style={{ color: "black" }}>
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
              <h3
                onClick={() =>
                  showModal(
                    <div className="chapter-list">
                      <p style={{ color: "black" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laboriosam, et quod voluptatibus corporis quos
                        eius praesentium vitae obcaecati, voluptate non natus
                        consequuntur dicta quisquam ducimus similique sequi
                        neque repellendus ipsam?
                      </p>
                    </div>
                  )
                }
              >
                Sign up
              </h3>
              <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <AppInput
                  // name="fullName"
                  type="text"
                  placeholder="Emeka Ebuka Eke"
                  variant="standard"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  error={/^[a-zA-Z\s]+$/.test(fullName)}
                  helperText={
                    /^[a-zA-Z\s]+$/.test(fullName)
                      ? "Name accepted"
                      : "Full name is required"
                  }
                  errorColor={/^[a-zA-Z\s]+$/.test(fullName) ? "green" : "red"}
                />
              </div>

              {/* <div className="login-form-group">
                <input
                  type="text"
                  placeholder="Emeka Ebuka Eke"
                  onChange={(e) => setFullName(e.target.value)}
                  className="login-input"
                />
              </div> */}
              <div className="login-form-group">
                <input
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  autoComplete="off"
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
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  style={{ paddingRight: "30px" }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle-icon"
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
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

              {/* <div className="login-form-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="login-input"
                />
                {fieldStatus.confirmPassword.message && (
                  <span>{fieldStatus.confirmPassword.message}</span>
                )}
              </div> */}
              {/* country info */}
              {/* <div className="login-form-group">
                <select
                  onChange={(e) =>
                    handleCountrySelect(countries[e.target.selectedIndex])
                  }
                  className="login-input"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.iso2} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {selectedCountry && (
                  <span>{`Selected Country: ${selectedCountry.name}`}</span>
                )}
              </div> */}

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
                <button
                  // onClick={handleSignIn}
                  type="submit"
                  className="login-btn mb-10"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
