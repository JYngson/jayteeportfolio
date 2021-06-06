import React from "react";
import "./Background.scss";
import Jaytee from "../../assets/Jaytee.jpg";

export default function Background() {
  return (
    <div className="Background">
      <img className="Background__image" src={Jaytee} />
    </div>
  );
}
