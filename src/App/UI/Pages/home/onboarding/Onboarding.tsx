import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Onboarding.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Button from "../../../components/button/Button";
import { Assets } from "../../../../Utils/constant/Assets";
import { useNavigate } from "react-router-dom";

interface SlideData {
  image: any;
  description: string;
}

const slides: SlideData[] = [
  {
    image: Assets.images.onboardingOne,
    description:
      "Prioritize exceptional experiences, we enable you to create memorable adventurous journeys that benefit both visitors and the communities they touch.",
  },
  {
    image: Assets.images.onboardingTwo,
    description:
      "We provide tailored consultancy services that enhance experiences and optimize operations, ensuring sustainable growth and lasting impact for your business.",
  },
  {
    image: Assets.images.onboardingThree,
    description:
      "Creating sustainable experiences that enrich both the community and visitors. By harmonizing fundraising, we ensure that every contribution and every visit leaves a lasting impact, fostering growth while preserving the unique charm of our destination.",
  },
];

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true, which is better fade or slide?, toggle on for fade
    cssEase: "linear",
    afterChange: (index: number) => setCurrentSlide(index),
    arrows: false,
  };

  const handleNext = () => {
    if (sliderRef.current && currentSlide < slides.length - 1) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="onboarding__container">
      <div className="main__logo__container">
        <img
          src={Assets.images.companyLogo}
          alt="Tourism4Food Logo"
          // onClick={() => navigate("/")}
          onClick={() => (window.location.href = "")}
          className="main__logo"
        />
      </div>
      <Slider ref={sliderRef} {...settings} className="onboarding__slider">
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="slide__content">
              <div className="img__div">
                <img src={slide.image} alt="" className="image-fluid" />
              </div>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="onboarding__controls">
        <p className="skip__text" onClick={() => navigate("/userdashboard")}>
          Skip
        </p>
        {currentSlide < slides.length - 1 ? (
          <span className="next__button" onClick={handleNext}>
            <MdOutlineKeyboardArrowRight />
          </span>
        ) : (
          <Button
            className="finish__btn"
            label="Get Started"
            // onClick={() => console.log("Onboarding completed!")}
            onClick={() => navigate("/userdashboard")}
          />
        )}
      </div>
    </div>
  );
};

export default Onboarding;
