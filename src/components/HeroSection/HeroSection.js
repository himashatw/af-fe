import React from "react";
import "./HeroSection.css";
import HomeButton from "../HomeButton/HomeButton";

const HeroSection = () => {
  return (
    <div className="hero-container">
          {/* <video src="./video-2.mp4" autoPlay loop muted /> */}
      <h1>ICAC 2.0</h1>
      <p>Starting from 30th June</p>
      <div className="hero-btns">
        <HomeButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          More Details
        </HomeButton>
        {/* <HomeButton
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </HomeButton> */}
      </div>
    </div>
  );
};

export default HeroSection;
