import React from "react";
import Navbar from "../../Components/navbar/NavBar";
import Footer from "../../Components/footer/Footer";
import "../../../../App.css";
// importing programs css file for a unifrom banner style
import "../programs/Programs.css";
import "./Legal.css";

const Legal: React.FC = () => {
  return (
    <>
      <main>
        <div>
          <Navbar />
        </div>
        {/* -----------------  */}
        <div className="programs__banner">
          <div className="programs__banner__cover">
            <div className="programs__banner__content">
              <h1>legal</h1>
              <div className="app__wrapper">
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                  ipsa vero nulla excepturi iusto repudiandae dignissimos
                  explicabo? Blanditiis, natus!
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ---------  */}
        <div className="app__wrapper legal__section">
          <h2 className="legal__title">Privacy policy</h2>
          <ul className="legal__container">
            <li className="legal__title_p">EMAIL COMMUNICATION</li>
            <li className="legal__p">
              When you make an inquiry through Tourism4Food, we'll send you an
              email containing the details of your inquiry and the contact
              information of the relevant organizations that can assist you
              further. If you reach out through our website, we may review your
              inquiry to see if we can connect you with additional partners who
              might offer the experience you're seeking, providing you with more
              options and a better chance of finding what you’re looking for.
            </li>
            <li className="legal__p">
              This will be followed by details on how you can claim a special
              gift from Tourism4Food. We’ll also send you a brief anonymous
              survey to help us continue improving the services we offer.
            </li>
            <li className="legal__p">
              Subsequently, you’ll receive emails with additional ideas for your
              trip, along with news and articles. We strive to make these emails
              as relevant and engaging as possible, including personalized
              travel suggestions tailored to your interests.
            </li>
            {/* -------------  */}
            <li className="legal__title_p">
              How to Unsubscribe or Change Email Preferences
            </li>
            <li className="legal__p">
              You can unsubscribe from our emails at any time by clicking the
              unsubscribe links at the top or bottom of our emails, by calling
              us at [insert phone number], or by emailing us at [insert email
              address].
            </li>
            <li className="legal__p">
              These links also allow you to choose how frequently you’d like to
              receive newsletters from us.
            </li>
            {/* --------------   */}
            <li className="legal__title_p">personal information</li>
            <li className="legal__p">
              You are not required to provide any personal information to browse
              Tourism4Food, and we guarantee that we will never sell or lease
              your personal information to any third parties.
            </li>
          </ul>
        </div>
        {/* ------------  */}
        <div className="app__wrapper legal__section">
          <h2 className="legal__title">terms and conditions</h2>
          <ul className="legal__container">
            <li className="legal__p">
              General Information The information provided on [insert website
              URL] (the "Site") is for general informational purposes only.
              Tourism4Food ("we," "us," or "our") makes no representation or
              warranty, express or implied, regarding the accuracy, adequacy,
              validity, reliability, availability, or completeness of any
              information on the Site.
            </li>
            <li className="legal__p">
              External Links Disclaimer The Site may contain links to
              third-party websites or content. These links are provided for your
              convenience only. Tourism4Food has no control over the content,
              privacy policies, or practices of any third-party websites and
              assumes no responsibility for them. The inclusion of any links
              does not necessarily imply a recommendation or endorse the views
              expressed within them.
            </li>
            <li className="legal__p">
              External Links Disclaimer The Site may contain links to
              third-party websites or content. These links are provided for your
              convenience only. Tourism4Food has no control over the content,
              privacy policies, or practices of any third-party websites and
              assumes no responsibility for them. The inclusion of any links
              does not necessarily imply a recommendation or endorse the views
              expressed within them.
            </li>
          </ul>
        </div>
        {/* -----------  */}
        <div className="legal__section__alt">
          <h2 className="legal__title">Disclaimer</h2>
          <ul className="legal__container">
            <li className="legal__p">
              General Information The information provided on [insert website
              URL] (the "Site") is for general informational purposes only.
              Tourism4Food ("we," "us," or "our") makes no representation or
              warranty, express or implied, regarding the accuracy, adequacy,
              validity, reliability, availability, or completeness of any
              information on the Site.
            </li>
            <li className="legal__p">
              External Links Disclaimer The Site may contain links to
              third-party websites or content. These links are provided for your
              convenience only. Tourism4Food has no control over the content,
              privacy policies, or practices of any third-party websites and
              assumes no responsibility for them. The inclusion of any links
              does not necessarily imply a recommendation or endorse the views
              expressed within them.
            </li>
          </ul>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Legal;
