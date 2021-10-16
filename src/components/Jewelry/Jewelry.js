import React from "react";
import "./Jewelry.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";

export default function Jewelry({
  galleryData,
  background1,
  mobileBack1,
  mobileBack2,
  mobileBack3,
  mobileHero,
  name,
}) {
  return (
    <div className="Jewelry">
      <div
        className="Jewelry__heroContainer"
        style={{
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="Jewelry__mobileHero"
        style={{
          backgroundImage: `url(${mobileHero})`,
        }}
      >
        <img
          className="Jewelry__mobileHero--img1"
          src={mobileBack1}
          alt="Background1"
        />
        <img
          className="Jewelry__mobileHero--img2"
          src={mobileBack2}
          alt="Background2"
        />
        <img
          className="Jewelry__mobileHero--img3"
          src={mobileBack3}
          alt="Background3"
        />
      </div>

      <div className="Jewelry__lookbook">
        <h1>{name} Lookbook</h1>
        <SRLWrapper>
          <Gallery photos={galleryData} />
        </SRLWrapper>
      </div>
    </div>
  );
}
