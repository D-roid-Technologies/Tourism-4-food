import React, { useEffect } from "react";
import Navbar from "../../Components/navbar/NavBar";
import Footer from "../../Components/footer/Footer";
import "../aboutus/AboutUs.css";
import "../../Components/liteGrid@v1.0/lite-grid.css";
import { Assets } from "../../../Utils/constant/Assets";
import Button from "../../Components/button/Button";
// import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom"; // Import useLocation

//about section two content
interface AboutContentTwo {
  contentImage: any;
  contentTitle: string;
  contentDescription: string;
}

interface teamSection {
  teamImage: any;
  teamName: string;
  teamPosition: string;
}

const aboutContent: AboutContentTwo[] = [
  {
    contentImage: Assets.images.pushPin,
    contentTitle: "our mission",
    contentDescription:
      "Our mission is to harness tourism's vast resources and networks to support underserved populations through sustainable practices, promoting local economic growth and improved livelihoods.",
  },
  {
    contentImage: Assets.images.lightBuld,
    contentTitle: "our vision",
    contentDescription:
      "We envision a world where tourism catalyzes eradicating hunger, boosting local economies, and fostering sustainable, responsible practices that uplift communities globally.",
  },
];

const team__section: teamSection[] = [
  {
    teamImage: Assets.images.ceoDummy,
    teamName: "Emeka Ihumezie",
    teamPosition: "Chief Executive Officer",
  },
  {
    teamImage: Assets.images.dooDummy,
    teamName: "Blessing Ihumezie",
    teamPosition: "Director of Operations",
  },
];

const AboutUs: React.FC = () => {
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
        {/* ABOUT BANNER SECTION  */}
        <div className="about__banner">
          <div className="about__banner__cover">
            <div className="about__banner__content p-4 p-md-0">
              <h1>about us</h1>
              <span>
                Tourism 4 food leverages tourism to address global hunger
              </span>
            </div>
          </div>
        </div>
        {/* ABOUT BANNER SECTION END  */}
        <div className="wrapper about__wrapper">
          <div className="group">
            {aboutContent.map((content, index) => {
              return (
                <div className="block-12 block-lg-6">
                  <div key={index} className="about__content__item">
                    <img
                      src={content.contentImage}
                      alt={content.contentTitle}
                    />
                    <h2>{content.contentTitle}</h2>
                    <p>{content.contentDescription}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="wrapper about__history">
          <div className="group about__history__container" id="history">
            <div className="about__history__title">
              <h2>History</h2>
            </div>
            <div className="block-12 block-lg-7 about__history__content">
              <p>
                {" "}
                Tourism 4 Food is a non-governmental organization leading a
                transformative movement by leveraging tourism to address global
                hunger. Our mission is to utilize resources within the tourism
                and hospitality sectors to support the poorest communities. We
                provide nutritious meals to underserved populations while
                promoting sustainable development. As a pro-poor tourism
                initiative, we focus on partnerships, strategic fundraising,
                vocational training, and meal distribution to combat food
                insecurity. We also raise awareness about food shortages and
                advocate for food security, partnering with stakeholders in the
                travel, food, and hospitality sectors.
              </p>
              <Button label="Reg Certificate" style={{ marginTop: "30px" }} />
            </div>
            <div className="block-12 block-lg-5 about__history__image">
              <img src={Assets.images.aboutHistoryImage} />
            </div>
          </div>
        </div>
        <div className="wrapper about__goals">
          <div className="group">
            <div className="block-12 block-lg-12 about__goals_container">
              {" "}
              <h2>Goals and Objectives of Tourism 4 Food</h2>
              <ol>
                <li>
                  Combat Global Hunger: Use tourism and hospitality resources to
                  provide nutritious meals to underserved communities.
                </li>
                <li>
                  Promote Sustainable Development: Support sustainable tourism
                  practices that foster local economic growth.
                </li>
                <li>
                  Foster Partnerships: Collaborate with stakeholders in travel,
                  food, and hospitality to tackle food insecurity.
                </li>
                <li>
                  Raise Awareness: Advocate for food security and highlight the
                  challenges of food shortages.
                </li>
                <li>
                  Advocacy for Responsible and Sustainable Tourism and
                  Hospitality: Promote responsible practices that protect the
                  environment and empower communities.
                </li>
                <li>
                  Vocational Training: Empower communities through
                  skill-building programs aimed at long-term development.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="about__achievements" id="achievements">
          <h2>Our Achievements</h2>
        </div>
        <section className="about__achievements__section">
          <div className="cover">
            <div className="center__content">
              <span>Picture and Description of Achievements</span>
              <Button
                variant="blur"
                label="Learn More"
                style={{ marginTop: "20px" }}
              />
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
        </section>
        <div className="about__achievements">
          <h2>Meet Our Team</h2>
          <div className="skip" id="team">
            <h4>
              Leadership Team: A team of dedicated professionals leading Tourism
              4 Food with expertise in tourism, hospitality, and social
              responsibility. (Insert bios and photos of key team members)
            </h4>
          </div>
        </div>
        <div className="wrapper">
          <div className="group">
            {team__section.map((team, index) => {
              return (
                <div className="block-12 block-lg-6">
                  <div key={index} className="about__content__item p-5">
                    <img
                      className="image-fluid"
                      src={team.teamImage}
                      alt={team.teamName}
                    />
                    <h2 className="mt-3" style={{ color: "#333333" }}>
                      {team.teamName}
                    </h2>
                    <p style={{ color: "#666666", marginTop: "-6px" }}>
                      {team.teamPosition}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="button__group">
              <Button label="Join Team" />
              <Button label="Become An Ambassador" />
            </div>
          </div>
        </div>
        <div className="about__achievements text-center mt-4 mb-5">
          <h2>Our Partners</h2>
          <div className="skip">
            <h4>
              Our Partners: We proudly collaborate with key organizations and
              companies committed to sustainable tourism and community
              development.
              {/* Display partner logos and links */}
            </h4>
            <div className="button__group mt-5">
              <Button label="Become a Partners" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
};

export default AboutUs;
