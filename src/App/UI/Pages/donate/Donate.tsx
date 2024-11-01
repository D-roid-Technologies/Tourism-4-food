import React, { useState } from "react";
import "../donate/Donate.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
interface FAQItem {
  question: string;
  answer: string;
}

const Donate: React.FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Can I donate via ACH/wire?",
      answer:
        "Yes, we accept ACH/wire transfers. Please contact our support team for detailed instructions.",
    },
    {
      question: "Can I donate by check?",
      answer: "Yes, you can send donations by check to our mailing address.",
    },
    {
      question: "Can I donate using PayPal or Venmo?",
      answer:
        "Yes, we accept donations through both PayPal and Venmo platforms.",
    },
    {
      question: "Can I donate stock?",
      answer:
        "Yes, we accept stock donations. Please contact us for transfer details.",
    },
    {
      question: "Can I donate using cryptocurrency?",
      answer: "Yes, we accept various cryptocurrencies for donations.",
    },
    {
      question: "Will I get a receipt?",
      answer:
        "Yes, you'll receive a receipt via email immediately after your donation.",
    },
    {
      question: "Is my donation tax deductible?",
      answer: "Yes, all donations are tax deductible as allowed by law.",
    },
    {
      question: "Can I dedicate my donation to someone?",
      answer:
        "Yes, you can dedicate your donation in honor or memory of someone.",
    },
    {
      question: "What are the fees associated with my donation?",
      answer:
        "We cover all processing fees to ensure 100% of your donation goes to our cause.",
    },
    {
      question: "How will my donation appear on my credit card statement?",
      answer: "It will appear as 'Tourism4Food Donation' on your statement.",
    },
    {
      question: "Is my donation secure?",
      answer:
        "Yes, we use industry-standard encryption to protect all transactions.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can reach us through our contact form or at support@tourism4food.org",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
      <div className="donate-main-container-file">
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
                  className="code-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                  onChange={handleChange}
                  value={formData.middleName}
                  className="code-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                  className="code-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                  className="code-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  onChange={handleChange}
                  value={formData.gender}
                  className="code-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  onChange={handleChange}
                  value={formData.address}
                  className="code-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={handleChange}
                  value={formData.postalCode}
                  className="code-input"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  value={formData.city}
                  className="code-input"
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
                  className="code-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="donationAmount"
                  placeholder="Donation Inpact"
                  onChange={handleChange}
                  value={formData.donationAmount}
                  className="code-input"
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
        <section className="faq-main-container">
          <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                    <span className="faq-icon">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={`faq-answer ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Donate;
