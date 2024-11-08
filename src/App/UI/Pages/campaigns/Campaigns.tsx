import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "../campaigns/Campaigns.css";
// importing programs css file for a unifrom banner style
import "../programs/Programs.css";
import "../../components/liteGrid@v1.0/lite-grid.css";
import Button from "../../components/button/Button";

const Campaigns: React.FC = () => {
  return (
    <>
      <main>
        <div>
          <Navbar />
        </div>
        <div className="programs__banner">
          <div className="programs__banner__cover">
            <div className="programs__banner__content p-4 p-md-0">
              <h1>campaigns</h1>
              <div className="wrapper">
                <span>
                  Join the campaign and become a voice in your local community 
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="campaigns">
          <div className="wrapper">
            <div className="group campaigns__container">
              <div className="block-12 block-lg-5 campaigns__image">
                <img src="https://placehold.co/600x600/FFFFFF/png" />
              </div>
              <div className="block-12 block-lg-7 campaigns__content">
                <p>
                  {" "}
                  <span>#sayNoToDirtyKitchen:</span> Join the movement to
                  promote improved hygiene standards in kitchen environments.
                  This campaign aims to raise awareness about maintaining
                  cleanliness in both home and professional kitchens, ensuring s
                  safer food preparation, reducing health risks, and fostering
                  better hygiene practices in the hospitality and food sectors.
                  Be a part of this global initiative to create cleaner, safer
                  kitchens for everyone!
                </p>
                <Button label="Join Campaign" style={{ marginTop: "30px" }} />
              </div>
            </div>
            {/* -----------  */}
            <div className="group campaigns__container__alt">
              <div className="block-12 block-lg-7 campaigns__content">
                <p>
                  {" "}
                  <span>#justaWeeTip:</span> Join the campaign to encourage
                  responsible tipping in the tourism and hospitality industries.
                  This movement highlights the importance of showing
                  appreciation for excellent service through fair and thoughtful
                  tipping practices while fostering a culture of respect and
                  support for service workers. Let’s make a difference in the
                  lives of hospitality staff by tipping wisely and promoting a
                  culture of gratitude!
                </p>
                <Button label="Join Campaign" style={{ marginTop: "30px" }} />
              </div>
              <div className="block-12 block-lg-5 campaigns__image">
                <img src="https://placehold.co/600x600/FFFFFF/png" />
              </div>
            </div>
            {/* ----------------  */}
            <div className="group campaigns__container__alt">
              <div className="block-12 block-lg-5 campaigns__image">
                <img src="https://placehold.co/600x600/FFFFFF/png" />
              </div>
              <div className="block-12 block-lg-7 campaigns__content">
                <p>
                  {" "}
                  <span>#hospitalitySmile:</span> Be part of this campaign to
                  promote exceptional customer service in the hospitality
                  industry. Through this movement, we aim to encourage staff in
                  tourism and hospitality to provide warm, friendly, and
                  memorable service with a smile. Excellent service improves
                  guest satisfaction and helps elevate the overall experience
                  for visitors while creating lasting impressions that drive
                  success in the industry.
                </p>
                <Button label="Join Campaign" style={{ marginTop: "30px" }} />
              </div>
            </div>
            {/* ------------  */}
            <div className="group campaigns__container__alt">
              <div className="block-12 block-lg-7 campaigns__content">
                <p>
                  {" "}
                  <span>#oneTreeOneCrop:</span> Join this initiative to promote
                  sustainable agriculture through tree planting and crop
                  diversification. By planting trees alongside crops, we can
                  improve soil health, enhance biodiversity, and contribute to
                  food security. This campaign encourages local communities to
                  adopt sustainable farming practices that not only benefit the
                  environment but also improve livelihoods. Together, we can
                  make a significant impact on agriculture and the ecosystem!
                </p>
                <Button label="Join Campaign" style={{ marginTop: "30px" }} />
              </div>
              <div className="block-12 block-lg-5 campaigns__image">
                <img src="https://placehold.co/600x600/FFFFFF/png" />
              </div>
            </div>
            {/* ----------  */}
            <div className="group campaigns__container__alt">
              <div className="block-12 block-lg-5 campaigns__image">
                <img src="https://placehold.co/600x600/FFFFFF/png" />
              </div>
              <div className="block-12 block-lg-7 campaigns__content">
                <p>
                  {" "}
                  <span>#tourismAndI:</span> This campaign encourages youth
                  participation in the tourism sector, highlighting the
                  importance of engaging young people in tourism-related
                  activities and careers. By fostering a sense of ownership and
                  involvement, we aim to empower the next generation to
                  contribute positively to their communities through tourism.
                  Join us in shaping the future of tourism and creating
                  opportunities for young leaders in the industry!e success in
                  the industry.
                </p>
                <Button label="Join Campaign" style={{ marginTop: "30px" }} />
              </div>
            </div>
            {/* ------------  */}
          </div>
        </section>
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
};

export default Campaigns;
