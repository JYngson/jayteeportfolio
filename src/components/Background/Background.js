import React from "react";
import "./Background.scss";
import Jaytee from "../../assets/Jaytee.jpg";

export default function Background({ background, visible }) {
  return (
    <div
      className="Background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <img
        className="Background__image"
        alt="Jaytee Background"
        src={Jaytee}
        style={{ visibility: `${visible}` }}
      />
    </div>
  );
}
