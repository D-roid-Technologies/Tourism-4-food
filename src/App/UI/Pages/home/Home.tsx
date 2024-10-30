import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "../home/Home.css";
import { Assets } from "../../../Utils/constant/Assets";

const Home: React.FunctionComponent = () => {
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
      <div className="get-involved-container">
        <h2>Get Involved</h2>
        <p>Join us in harnessing the power of food to nourish the world.</p>
        <div className="actions">
          <div className="action-item">
            <span role="img" aria-label="Donate">
              <img src={Assets.images.homeDonateImage} alt="helping hands" />
            </span>
            <a href="#donate">Donate</a>
          </div>
          <div className="action-item">
            <span role="img" aria-label="Volunteer">
              <img src={Assets.images.homeDonateImage} alt="helping hands" />
            </span>
            <a href="#volunteer">Volunteer</a>
          </div>
          <div className="action-item">
            <span role="img" aria-label="Partner">
              <img src={Assets.images.homeDonateImage} alt="helping hands" />
            </span>
            <a href="#partner">Partner with Us</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
