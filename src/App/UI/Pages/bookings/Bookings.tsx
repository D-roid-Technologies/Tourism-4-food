import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import "./Bookings.css";
import "../../components/liteGrid@v1.0/lite-grid.css";
import { Assets } from "../../../Utils/constant/Assets";
import Button from "../../components/button/Button";

const Bookings: React.FC = () => {
  return (
    <>
      <main>
        <div>
          <Navbar />
        </div>
        {/* -------------------  */}
        <div className="bookings__banner">
          <div className="bookings__banner__cover">
            <div className="bookings__banner__content p-4 p-md-0">
              <h1>bookings</h1>
              <div className="wrapper">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis provident officia ex.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------  */}
        <h2
          style={{
            color: "#333333",
            fontWeight: "bolder",
            fontSize: "37px",
            textAlign: "center",
            textTransform: "capitalize",
            margin: "80px 0 50px 0",
          }}
        >
          make reservations
        </h2>
        <div className="wrapper">
          <div className="group justify-center">
            <div className="booking__card block-12 block-lg-6">
              <img
                src={Assets.images.bookingsCardOne}
                className="image-fluid"
                alt=""
              />
              <div>
                <Button
                  label="book travel and tour"
                  style={{ color: "black", textTransform: "capitalize" }}
                />
              </div>
            </div>
            <div className="booking__card block-12 block-lg-6">
              <img
                src={Assets.images.bookingsCardTwo}
                className="image-fluid"
                alt=""
              />
              <div>
                <Button
                  label="book event"
                  style={{ color: "black", textTransform: "capitalize" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------  */}
        <section className="bookings__section">
          <div className="cover">
            <div className="wrapper">
              <div className="bookings__center__content">
                <span>Make Enquiries with our consultancy services</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti vero ipsam eligendi! Nisi, reprehenderit corrupti!
                </p>
                <Button label="Sign In" style={{ marginTop: "20px" }} />
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------  */}
        <div className="wrapper tourism__products">
          <div className="group">
            <div className="block-12 block-lg-6 product">
              <img
                src={Assets.images.mobileArt}
                className="image-fluid"
                alt=""
              />
            </div>
            <div className="block block-lg-6 details">
              <span>Shop tourism products</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti vero
              </p>
              <Button label="Shop Now" style={{ marginTop: "20px" }} />
            </div>
          </div>
        </div>

        <div>
          <br />
          <br />
        </div>
        {/* --------------  */}
        <Footer />
      </main>
    </>
  );
};

export default Bookings;
