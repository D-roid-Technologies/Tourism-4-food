import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "../../components/liteGrid@v1.0/lite-grid.css";
import Button from "../../components/button/Button";
import "../getInvolved/GetInvolved.css";
import { Assets } from "../../../Utils/constant/Assets";

const GetInvolved: React.FC = () => {
  return (
    <>
      <main>
        <div>
          <Navbar />
        </div>
        <div className="get__involved__banner">
          <div className="get__involved__banner__cover">
            <div className="get__involved__banner__content p-4 p-md-0">
              <h1>get invloved</h1>
              <div className="wrapper">
                <span>
                  Become a beacon of change by joining us. Your voice can spark
                  a transformative change in your community.
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="come__eat">
          <div className="wrapper get__involved">
            <div className="group get__involved__container">
              <div className="get__involved__title">
                <h2>Tourism4Food Cuurent Volunteering</h2>
              </div>

              <div className="block-12 block-lg-7 get__involved__content">
                <p>
                  {" "}
                  Write the history of Tourism4food Lorem ipsum dolor sit amet,
                  adipiscing elit, sed diam nonummy nibh evismod tincidune.
                  Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy
                  nibh evismod tincidune.orem ipsum dolor sit amet, adipiscing
                  elit, sed diam nonummy nibh evismod tincidune. Lorem ipsum
                  dolor sit amet, adipiscing elit, sed diam nonummy nibh evismod
                  tincidune.orem ipsum dolor sit amet, adipiscing elit, sed diam
                  nonummy nibh evismod tincidune. Lorem ipsum dolor sit amet,
                  adipiscing elit, sed diam nonummy nibh evismod tincidune.
                </p>
                <Button
                  label="Join Tourism4food Volunteer Corps"
                  style={{ marginTop: "30px" }}
                />
              </div>
              <div className="block-12 block-lg-5 get__involved__image">
                <img src={Assets.images.volunteerCorp} />
              </div>
            </div>
            <div className="group get__involved__container_alt">
              <div className="get__involved__title">
                <h2>Our Partnerships</h2>
              </div>
              <div className="block-12 block-lg-5 get__involved__image">
                <img src={Assets.images.ourPartnerships} />
              </div>
              <div className="block-12 block-lg-7 get__involved__content__alt">
                <p>
                  {" "}
                  Write the history of Tourism4food Lorem ipsum dolor sit amet,
                  adipiscing elit, sed diam nonummy nibh evismod tincidune.
                  Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy
                  nibh evismod tincidune.orem ipsum dolor sit amet, adipiscing
                  elit, sed diam nonummy
                </p>
                <Button label="Partner with Us" style={{ marginTop: "30px" }} />
              </div>
            </div>
          </div>
        </section>
        {/* -----------------  */}
        <div className="get__involved">
          <h2>Looking for More Ways to Get Involved?</h2>
        </div>
        <section className="wrapper get__involved__section">
          <div className="cover">
            <div className="get__involved__center__content">
              <span>donate</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                accusamus?
              </p>
              <Button label="Donate" style={{ marginTop: "20px" }} />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="wrapper get__involved__section__alt">
          <div className="cover">
            <div className="get__involved__center__content">
              <span>CORPORATE ENGAGEMENT</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                accusamus?
              </p>
              <Button label="Donate" style={{ marginTop: "20px" }} />
            </div>
          </div>
        </section>

        <br />
        <br />
        <Footer />
      </main>
    </>
  );
};

export default GetInvolved;
