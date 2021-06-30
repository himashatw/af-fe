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
            type="button"
            className="btn btn-outline-light btn-lg"
            style={{ border: "1px solid white" }}
          >
            <h1>Register Now!</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
