import React from "react";
import Navbar from "../../Components/navbar/NavBar";
import Footer from "../../Components/footer/Footer";
import "../home/Home.css";
import { Assets } from "../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <section className="home-hero">
        <div className="home-hero-content">
          <h1 className="home-hero-title">
            Leverage tourism and <br /> hospitality to help <br />
            combat global hunger.
          </h1>
          <p className="home-hero-subtitle">
            Empowering communities through tourism to fight hunger and build
            sustainable futures.
          </p>
          <div className="home-hero-buttons">
            <button className="home-hero-btn explore-btn">
              Explore Projects
            </button>
            <button className="home-hero-btn book-btn">Book now</button>
          </div>
        </div>
        <div className="home-hero-image">
          <img src={Assets.images.homeHeroImage} alt="Travel illustration" />
        </div>
      </section>
      <div>
        <img
          src={Assets.images.homeEatChallenge}
          className="eat-challenge-video"
          alt="Eat challenge video"
        />
      </div>
      {/* get involved section */}
      <div className="get-involved-main-cont">
        <div className="get-involved-container">
          <h2>Get Involved</h2>
          <p>
            Join us in harnessing the power of food to <br /> nourish the world.
          </p>
          <div className="actions">
            <div className="action-item">
              <span role="img" aria-label="Donate">
                <img src={Assets.images.homeDonateImage} alt="helping hands" />
              </span>
              {/* <a href="#donate">Donate</a> */}
              <span
                onClick={() => navigate("/donate")}
                className="donate-home-details"
              >
                Donate
              </span>
            </div>
            <div className="action-item">
              <span role="img" aria-label="Volunteer">
                <img src={Assets.images.homeDonateImage} alt="helping hands" />
              </span>
              {/* <a href="#volunteer">Volunteer</a> */}
              <span
                onClick={() => navigate("")}
                className="donate-home-details"
              >
                Volunteer
              </span>
            </div>
            <div className="action-item">
              <span role="img" aria-label="Partner">
                <img src={Assets.images.homeDonateImage} alt="helping hands" />
              </span>
              {/* <a href="#partner">Partner with Us</a> */}
              <span
                onClick={() => navigate("")}
                className="donate-home-details"
              >
                Partner with Us
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Liberian school lunch */}
      <div className="liberian-banner">
        <div className="liberian-overlay">
          <h1 className="liberian-header">
            School Feeding Program <br />
          </h1>
          <p className="liberian-details">
            Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh
            euismod tincidunt.
          </p>
          <button className="liberia-learn-more-button">Learn More</button>
        </div>
      </div>
      {/* BookingCard section */}
      <div className="booking-card-container">
        <div className="booking-card">
          <div className="booking-content">
            <h2>
              Enjoy Seamless booking services and travel wherever you want
            </h2>
            <button className="booking-button">Book now</button>
          </div>
          <div className="booking-image">
            <img src={Assets.images.travelBag} alt="Travel bags" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
