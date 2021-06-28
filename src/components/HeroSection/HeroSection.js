import React from "react";
import "./HeroSection.css";
import HomeButton from "../HomeButton/HomeButton";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>ICAF 1.0</h1>
      <p>Starting from 30th June</p>
      <div className="hero-btns">
        <HomeButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Register Now!
        </HomeButton>
      </div>
    </div>
  );
};

export default HeroSection;
