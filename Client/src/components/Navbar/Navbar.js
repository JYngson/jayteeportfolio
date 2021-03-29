import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__sidebar">
        <div className="Navbar__mainNav">
          <h2 className="Navbar__links"> - Portfolio - </h2>
          <h2 className="Navbar__links">About -</h2>
        </div>
        <div className="Navbar__portfolio">
          <ul>
            <li className="Navbar__shoot">MM__DD__Shoot</li>
            <li className="Navbar__shoot">MM__DD__Shoot</li>
            <li className="Navbar__shoot">MM__DD__Shoot</li>
            <li className="Navbar__shoot">MM__DD__Shoot</li>
          </ul>
        </div>
      </div>
      <div className="Navbar__title">
        <h1 className="Navbar__header">Sleepy</h1>
      </div>
      <div className="Navbar__contact"></div>
    </div>
  );
}
