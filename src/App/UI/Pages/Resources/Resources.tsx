import React from "react";

import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "../../../../App.css";
// importing programs css file for a unifrom banner style
import "../programs/Programs.css";
import "./Resources.css";
import { Assets } from "../../../Utils/constant/Assets";
import Button from "../../components/button/Button";
// import { IoIosArrowForward } from "react-icons/io";

interface research {
  researchImage: any;
  researchText: string;
}

const researchSectionOne: research[] = [
  {
    researchImage: Assets.images.partnership,
    researchText: "Partnership",
  },
  {
    researchImage: Assets.images.economicImpact,
    researchText: "Economic Impact",
  },
  {
    researchImage: Assets.images.targetAudience,
    researchText: "Target Audience",
  },
];

const researchSectionTwo: research[] = [
  {
    researchImage: Assets.images.globalHunger,
    researchText: "Global Hunger Issues",
  },
  {
    researchImage: Assets.images.volunteerism,
    researchText: "Volunteerism",
  },
];

const Resources: React.FC = () => {
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
              <h1>resources</h1>
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
        {/* ------------  */}
        <div className="resources__title app__wrapper">
          <p>Blog</p>
        </div>
        {/* ------------  */}
        <div className="featured__blog">
          <div
            className="app__wrapper featured__con"
            style={{ margin: "auto" }}
          >
            <div className="blog__split">
              <img
                className="image-fluid"
                src={Assets.images.featuredBlogImage}
                alt=""
              />
              <Button
                label="Featured"
                style={{
                  margin: "35px 0",
                  background: "rgba(194, 110, 59, 0.10)",
                  color: "#000",
                }}
              />
            </div>
            <div className="blog__split">
              <div className="blog__info">
                <h1 className="title">Trending</h1>
                <hr style={{ margin: "20px 0" }} />
                <ul className="blog__items">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <hr style={{ margin: "20px 0" }} />

                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <hr style={{ margin: "20px 0" }} />

                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas architecto facere illo.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* -----------------  */}
        <div className="app__wrapper text__">
          <h1>Insights from Mr. Horecano</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            culpa similique quo recusandae assumenda veritatis deserunt quam
            iste nobis. Quo numquam earum iure deserunt qui aperiam, accusantium
            voluptas praesentium repellendus?
          </p>
        </div>
        {/* ----------------  */}
        <div className="resources__achievements__section">
          <div className="cover">
            <div className="center__content">
              <span>Picture and videos if necessary</span>
              {/* <Button
                variant="blur"
                label="Learn More"
                style={{ marginTop: "20px" }}
              /> */}
            </div>
            {/* <div className="learn-more-button">
              <Button
                style={{
                  height: "70px",
                  width: "70px",
                  borderRadius: "50%",
                  color: "#ff914d",
                  padding: "0",
                  // fontSize: "26px",
                }}
                variant="blur"
              >
                <IoIosArrowForward />
              </Button>
            </div> */}
          </div>
        </div>
        {/* ------------  */}
        <div className="resources__title app__wrapper">
          <p>Market Research</p>
        </div>
        <div className="market__research">
          <div
            className="app__wrapper featured__con"
            style={{ margin: "auto" }}
          >
            {researchSectionOne.map((research, index) => {
              return (
                <div key={index} className="research">
                  <img
                    src={research.researchImage}
                    className="image-fluid"
                    alt=""
                  />
                  <p>{research.researchText}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* -------------  */}
        <div className="resources__title app__wrapper">
          <p>Educational Research</p>
        </div>
        <div className="market__research">
          <div
            className="app__wrapper featured__con"
            style={{ margin: "auto" }}
          >
            {researchSectionTwo.map((research, index) => {
              return (
                <div key={index} className="research">
                  <img
                    src={research.researchImage}
                    className="image-fluid"
                    alt=""
                  />
                  <p>{research.researchText}</p>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
};

export default Resources;
