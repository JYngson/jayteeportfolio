import React, { useState } from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import Differentiate from "../../assets/images/SevenTeenTwentyThree/IMG_9850.JPG";
import "./Navbar.scss";

export default function Navbar({ setBackground }) {
  const [sublist, setSublist] = useState(true);
  const [mobileMenu, setMobileMenu] = useState("flex");
  const [portfolio, setPortfolio] = useState(false);

  //Hover effect for shoots
  const onHover = (image) => {
    setBackground(image);
  };

  //Toggles Portfolio list on/off
  const portfolioHandle = () => {
    setPortfolio(!portfolio);
  };

  //Toggles mobile menu display
  const mobileMenuHandle = () => {
    mobileMenu === "none" ? setMobileMenu("flex") : setMobileMenu("none");
  };

  //Toggles Fashion Sub-bar
  const fashionHandle = () => {
    setSublist(true);
  };
  //Toggles Jewelry Sub-bar
  const jewelryHandle = () => {
    setSublist(false);
  };

  return (
    <div className="Navbar">
      <div className="Navbar__sidebar">
        <FcMenu className="Navbar__sideIcon" onClick={mobileMenuHandle} />
        <div className="Navbar__mainNav" style={{ display: mobileMenu }}>
          <div className="Navbar__mobileNav">
            <h2 className="Navbar__links" onClick={portfolioHandle}>
              Portfolio
            </h2>
            <Link to="/about" className="Navbar__links">
              About
            </Link>
          </div>
        </div>

        {portfolio ? (
          <div className="Navbar__portfolio">
            <div className="Navbar__portfolioShoots">
              <div className="Navbar__shootSublist">
                <h3 className="Navbar__shootSubheader" onClick={fashionHandle}>
                  Fashion
                </h3>
                <h3 className="Navbar__shootSubheader" onClick={jewelryHandle}>
                  Jewelry
                </h3>
              </div>
              {sublist ? (
                <div>
                  <div className="Navbar__shootList">
                    <ul>
                      <Link
                        to="/Vulkan"
                        className="Navbar__shoot"
                        onMouseEnter={() => onHover(`${Differentiate}`)}
                        onMouseLeave={() => onHover("Black")}
                      >
                        01_21_VULKAN//17:23
                      </Link>
                    </ul>
                  </div>
                </div>
              ) : (
                <h2>Jewelry</h2>
              )}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>

      <div className="Navbar__title">
        <Link to="/" className="Navbar__header">
          Sleepy
        </Link>
      </div>

      <div className="Navbar__contact">
        <div className="Navbar__contactIcons">
          <a
            href="https://www.instagram.com/jm.sleepy/"
            className="Navbar__contactLink"
          >
            <FiInstagram size={30} />
          </a>
          <a
            className="Navbar__contactLink"
            href="mailto:sleepyfromthe604@gmail.com"
          >
            <FiMail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
