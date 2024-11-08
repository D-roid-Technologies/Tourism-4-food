import React from "react";
import Navbar from "../../Components/navbar/NavBar";
import Footer from "../../Components/footer/Footer";
import "../programs/Programs.css";
import "../../Components/liteGrid@v1.0/lite-grid.css";
import { Assets } from "../../../Utils/constant/Assets";
import Button from "../../Components/button/Button";

const Programs: React.FC = () => {
  return (
    <>
      <main>
        <div>
          <Navbar />
        </div>
        {/* --------------------------  */}

        <div className="programs__banner">
          <div className="programs__banner__cover">
            <div className="programs__banner__content p-4 p-md-0">
              <h1>our programs</h1>
              <div className="wrapper">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis provident officia ex.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-fluid placeholder">
          <div className="group">
            <div className="block-12 block-lg-3 programs__icons__item p-4">
              <img src="https://placehold.co/300x300/C4E6F2/png" alt="" />
            </div>
            <div className="block-12 block-lg-3 programs__icons__item p-4">
              <img src="https://placehold.co/300x300/C4E6F2/png" alt="" />
            </div>
            <div className="block-12 block-lg-3 programs__icons__item p-4">
              <img src="https://placehold.co/300x300/C4E6F2/png" alt="" />
            </div>
            <div className="block-12 block-lg-3 programs__icons__item p-4">
              <img src="https://placehold.co/300x300/C4E6F2/png" alt="" />
            </div>
          </div>
        </div>
        <section className="come__eat">
          <div className="wrapper programs__history">
            <div className="group programs__history__container">
              <div className="programs__history__title">
                <h2>come eat feeding program</h2>
              </div>
              <div className="block-12 block-lg-5 programs__history__image">
                <img src={Assets.images.coomeEatImage} />
              </div>
              <div className="block-12 block-lg-7 programs__history__content">
                <p>
                  {" "}
                  A transformative initiative dedicated to providing nutritious
                  meals to 1 million school children, ensuring food security
                  while supporting their education. Since its inception just a
                  few months ago, ComeEat has already provided meals to hundreds
                  of children across African states through its
                  “One-Plate-at-a-Time” approach, positively impacting their
                  well-being and academic success.  
                </p>
                <Button label="Get Involved" style={{ marginTop: "30px" }} />
              </div>
            </div>
          </div>
        </section>
        <section className="coach__me mt-3">
          <div className="wrapper programs__history">
            <div className="group programs__history__container">
              <div className="programs__history__title">
                <h2>coach me program</h2>
              </div>

              <div className="block-12 block-lg-7 programs__history__content">
                <p>
                  {" "}
                  A vocational training and capacity-building program aimed at
                  empowering local communities by enhancing skills, promoting
                  self-sufficiency, creating jobs, and fostering economic
                  growth. By joining, participants gain access to skill-building
                  opportunities that enable them to earn better income and
                  contribute to their communities. Register now and become part
                  of a growing community, learning new skills to improve your
                  livelihood. Find a list of our training programs below and
                  take the first step toward your personal and professional
                  growth.
                </p>
                <Button label="Get Involved" style={{ marginTop: "30px" }} />
              </div>
              <div className="block-12 block-lg-5 programs__history__image">
                <img src={Assets.images.coachMe} />
              </div>
            </div>
          </div>
        </section>
        <section className="bridge__builders">
          <div className="wrapper programs__history">
            <div className="group programs__history__container">
              <div className="programs__history__title">
                <h2>bridge builders</h2>
              </div>
              <div className="block-12 block-lg-5 programs__history__image">
                <img src={Assets.images.bridgeBuilders} />
              </div>
              <div className="block-12 block-lg-7 programs__history__content">
                <p>
                  {" "}
                  A community-driven franchise initiative to lift youths out of
                  poverty through a collaborative “help me, I help others”
                  model, encouraging shared success and local development.
                  Attend our webinar today to explore how we can bridge that gap
                  between you, your community and the business ideas you have,
                  We bridge not only financially, but social values.  Discover
                  Me Talent Hunt: An engaging talent hunt program that brings
                  indoor and outdoor activities to local communities, fostering
                  sports, fun, competition, and entertainment to uncover hidden
                  talents.
                </p>
                <Button label="Get Involved" style={{ marginTop: "30px" }} />
              </div>
            </div>
          </div>
        </section>
        {/* -----------------------------------  */}
        <Footer />
      </main>
    </>
  );
};

export default Programs;
