import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>ICAF 1.0</h1>
      <p>Starting from 30th June</p>
      <div className="hero-btns">
        <Link to="/sign-up">
          <button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Register Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
