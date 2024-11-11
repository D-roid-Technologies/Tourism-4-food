import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "../../../../App.css";
// importing programs css file for a unifrom banner style
import "../programs/Programs.css";
import "./Contact.css";
import { useLocation } from "react-router-dom"; // Import useLocation
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../../components/button/Button";

interface FAQItem {
  question: string;
  answer: string;
}
const faqData: FAQItem[] = [
  {
    question: "How can I donate?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam incidunt quisquam.",
  },
  {
    question: "Can I make a donation in honor of someone?",
    answer:
      "Yes, you can dedicate your donation in honor or memory of someone.",
  },
  {
    question:
      "I’m looking to host my own fundraiser - do you have a template I can use?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non repellendus, culpa eius dolorum consequuntur autem iure corrupti necessitatibus suscipit?",
  },
  {
    question:
      "I am already a recurring donor - how can I make changes to my monthly donation?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non repellendus, culpa eius dolorum consequuntu.",
  },
  {
    question: "Can I donate in Canada?",
    answer:
      "Yes, we accept donations from any country in the world. Please contact us for transfer details.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum animi expedita, aspernatur quam sit possimus deserunt at modi delectus, libero veniam sunt quis magnam architecto recusandae asperiores, odit obcaecati vel!",
  },
  {
    question: "How can I work for Tourism4Food?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum animi expedita, aspernatur quam sit possimus deserunt at modi delectus.",
  },
  {
    question: "Do you sell  merchandise?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum animi expedita, asper.",
  },
];

const Contact: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const location = useLocation(); // Get the location

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <main>
        <div>
          <Navbar />
        </div>
        {/* -----------  */}
        <div className="programs__banner">
          <div className="programs__banner__cover">
            <div className="programs__banner__content">
              <h1>Contact Us</h1>
              <div className="app__wrapper">
                <span>
                  Thank you for your interest in Tourism4Food. Below, you'll
                  find answers to frequently asked questions. If you need any
                  additional assistance, please don't hesitate to reach out.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------  */}
        <div className="app__wrapper faq__section" id="faq">
          <h2 className="faq__title">FAQ's</h2>
          <div className="faq__main">
            {faqData.map((item, index) => (
              <div key={index} className="faq__item">
                <div
                  className="faq__question"
                  onClick={() => handleToggle(index)}
                >
                  <h3>{item.question}</h3>
                  <span className={activeIndex === index ? "rotate" : ""}>
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </div>
                <div
                  className={`faq__answer ${
                    activeIndex === index ? "expanded" : "collapsed"
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ----------------------  */}
        <div className="app__wrapper reach__out">
          <p>reach out to us</p>
          <p>
            <a href="mailto:tourism4food@gmail.com">tourism4food@gmail.com</a>
          </p>
        </div>
        {/* -------------  */}
        <div className="last__sec">
          <h2>Interested in Volunteering?</h2>
          <div className="btn__con">
            <Button label="Sign Up" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
