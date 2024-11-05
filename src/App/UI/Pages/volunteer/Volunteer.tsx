import React, { useState } from "react";
import Navbar from "../../components/navbar/NavBar";
import "../volunteer/Volunteer.css";
import FooterTwo from "../../components/footertwo/FooterTwo";

const Volunteer: React.FunctionComponent = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main>
      <div>
        <Navbar />
        <div className="vol-hero-section">
          <div className="vol-hero-overlay"></div>
          <div className="vol-overlay">
            <h1 className="vol-header">Volunteer with Us</h1>
            <p className="vol-details">
              Thank you so much for your interest in volunteering with
              Tourism4Food . To find out more about our volunteer opportunities,
              please register to our Volunteer Corps!  If you have any
              additional questions, please feel free to reach out at email We
              look forward to serving with you in the future!
            </p>
          </div>
        </div>
        {/* form section */}
        <div className="signup-container">
          {/* <div className="signup-card-container"> */}
          <div className="signup-card">
            <p className="volunteer-login-btn">
              Already have an account? <a href="/login">Log in</a>
            </p>

            <div className="signup-header">
              <h2>Create your account</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="volunteer-input-box"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="volunteer-input-box"
                />
              </div>
              <div className="form-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="volunteer-input-box"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  👁️
                </button>
              </div>
              <div className="volunteer-next-btn-cont">
                <button type="submit" className="volunteer-next-button">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
      <FooterTwo />
    </main>
  );
};

export default Volunteer;
