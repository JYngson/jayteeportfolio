import React, { useState } from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import Differentiate from "../../assets/images/SevenTeenTwentyThree/IMG_9850.JPG";
import "./Navbar.scss";

export default function Navbar({ setBackground, setVisible }) {
  const [sidebar, setSidebar] = useState(true);
  const [sublist, setSublist] = useState(true);
  const [invert, setInvert] = useState("invert(0)");

  // Hover effect for shoots
  const onHover = (image, visible, filter) => {
    setBackground(image);
    setVisible(visible);
    setInvert(filter);
  };

  //Toggles Portfolio Sidebar
  const portfolioHandle = () => {
    setSidebar(true);
  };
  //Toggles About Sidebar
  const aboutHandle = () => {
    setSidebar(false);
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
    <div className="Navbar" style={{ filter: `${invert}` }}>
      <div className="Navbar__sidebar">
        <div className="Navbar__mainNav">
          <h2 className="Navbar__links" onClick={portfolioHandle}>
            {" "}
            - Portfolio -{" "}
          </h2>
          <h2 className="Navbar__links" onClick={aboutHandle}>
            About -
          </h2>
        </div>
        <div className="Navbar__portfolio">
          {sidebar ? (
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
                      <li
                        className="Navbar__shoot"
                        onMouseEnter={() =>
                          onHover(`${Differentiate}`, "Hidden", "invert(1)")
                        }
                        onMouseLeave={() =>
                          onHover("Black", "Visible", "invert(0)")
                        }
                      >
                        01_21_VULKAN//17:23
                      </li>
                      {/* <li
                        className="Navbar__shoot"
                        onMouseEnter={() => onHover("Blue", "Hidden")}
                        onMouseLeave={() => onHover("Black", "Visible")}
                      >
                        12__20__ELEMENTS
                      </li>
                      <li className="Navbar__shoot">MM__DD__Shoot</li>
                      <li className="Navbar__shoot">MM__DD__Shoot</li> */}
                    </ul>
                  </div>
                </div>
              ) : (
                <h2>Jewelery</h2>
              )}
            </div>
          ) : (
            <div className="Navbar__about">
              <h2>About Sleepy</h2>
            </div>
          )}
        </div>
      </div>
      <div className="Navbar__title">
        <h1 className="Navbar__header">Sleepy</h1>
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
