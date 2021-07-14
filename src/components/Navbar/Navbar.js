import React, { useState } from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Differentiate from "../../assets/images/SevenTeenTwentyThree/IMG_9850.JPG";
import "./Navbar.scss";

export default function Navbar({ setBackground, setVisible }) {
  const [sidebar, setSidebar] = useState(true);
  const [sublist, setSublist] = useState(true);
  const [invert, setInvert] = useState("invert(0)");

  // Hover effect for shoots
  const onHover = (image, filter) => {
    setBackground(image);
    setInvert(filter);
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
    <div className="Navbar" style={{ filter: invert }}>
      <div className="Navbar__sidebar">
        <div className="Navbar__mainNav">
          <h2 className="Navbar__links">- Portfolio -</h2>
          <Link to="/about" className="Navbar__links">
            About -
          </Link>
        </div>
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
                      onMouseEnter={() =>
                        onHover(`${Differentiate}`, "invert(1)")
                      }
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
      </div>

      <div className="Navbar__title">
        <Link to="/" className="Navbar__header">
          Sleepy
        </Link>
      </div>

      <div className="Navbar__contact">
        <div className="Navbar__contactIcons">
          <FiInstagram size={30} />
          <FiMail size={30} />
        </div>
      </div>
    </div>
  );
}
