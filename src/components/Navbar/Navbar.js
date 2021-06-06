import React, { useState } from "react";
import { FiInstagram, FiMail } from "react-icons/fi";
import "./Navbar.scss";

export default function Navbar() {
  let [sidebar, setSidebar] = useState(true);
  let [sublist, setSublist] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const portfolioHandle = () => {
    setSidebar(true);
    console.log(sidebar);
  };

  const aboutHandle = () => {
    setSidebar(false);
    console.log(sidebar);
  };

  const fashionHandle = () => {
    setSublist(true);
    console.log(sublist);
  };

  const jewelryHandle = () => {
    setSublist(false);
    console.log(sublist);
  };

  return (
    <div className="Navbar">
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
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                      >
                        01__21__DIFFERENTIATE
                      </li>
                      <li
                        className="Navbar__shoot"
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                      >
                        12__20__ELEMENTS
                      </li>
                      <li className="Navbar__shoot">MM__DD__Shoot</li>
                      <li className="Navbar__shoot">MM__DD__Shoot</li>
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
