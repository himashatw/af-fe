import React, { useState, useEffect } from "react";
import HomeButton from "../HomeButton/HomeButton";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              CMS
              <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/news"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/articles"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Speakers
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && (
              <HomeButton buttonStyle="btn--outline">SIGN UP</HomeButton>
            )}
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;
