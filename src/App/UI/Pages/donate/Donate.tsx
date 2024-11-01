import React, { useState } from "react";
import "../donate/Donate.css";
import Navbar from "../../components/navbar/NavBar";

const Donate: React.FunctionComponent = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    gender: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    phoneNumber: "",
    donationAmount: "",
    agreement: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="donate-hero-section">
          <div className="donate-hero-overlay"></div>
          <div className="donate-overlay">
            <h1 className="donate-header">DONATE</h1>
            <p className="donate-details">
              Make an impact by contributing through flexible options such as
              one-time donations, recurring support, or campaign-specific
              contributions.
            </p>
          </div>
        </div>
        {/* FORM SECTION */}
        <div className="donate-form-container">
          <div className="container">
            <h1 className="t-donate-heading">Donate to Tourism4Food</h1>
            <p className="t-donate-details">
              Help us provide fresh meals to communities in need
            </p>
            <div className="donation-options">
              <button className="donation-option">One-time donation</button>
              <button className="donation-option-two">Monthly</button>
            </div>
            <form onSubmit={handleSubmit} className="donation-form">
              <div className="form-group">
                <label className="form-group-heading">Your Information</label>
                <select
                  name="title"
                  onChange={handleChange}
                  value={formData.title}
                >
                  <option value="">Suffix</option>
                  <option value="Mr">Mr.</option>
                  <option value="Ms">Ms.</option>
                  <option value="Mrs">Mrs.</option>
                  <option value="Dr">Dr.</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                  onChange={handleChange}
                  value={formData.middleName}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  onChange={handleChange}
                  value={formData.gender}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  value={formData.address}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={handleChange}
                  value={formData.postalCode}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  value={formData.city}
                />
              </div>
              <div className="form-group">
                <select
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                >
                  <option value="">Country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">UK</option>
                  {/* Add more countries as needed */}
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="donationAmount"
                  placeholder="Donation Amount"
                  onChange={handleChange}
                  value={formData.donationAmount}
                />
              </div>
              <div className="form-group agreement">
                <input
                  type="checkbox"
                  name="agreement"
                  onChange={handleChange}
                  checked={formData.agreement}
                />
                <label>Yes, I agree to the Terms and Conditions</label>
              </div>
              <button type="submit" className="submit-button">
                Donate
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
