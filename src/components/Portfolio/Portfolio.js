import React from "react";
import "./Portfolio.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import { Carousel } from "react-responsive-carousel";

const variants = {
  initial: {
    transform: "scale(1.25, 1.25)",
    filter: "invert(1)",
  },
  in: {
    transform: "scale(1, 1)",
    filter: "invert(0)",
  },
  out: {
    opacity: 0,
  },
};

const transition = {
  duration: 1,
};

export default function Portfolio({
  galleryData,
  background1,
  background2,
  background3,
  mobileBack1,
  mobileBack2,
  mobileBack3,
  name,
}) {
  return (
    <motion.div
      className="Portfolio"
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={6500}
        showThumbs={false}
        className="Portfolio__hero"
      >
        <div style={{ height: "100vh" }}>
          <img src={background1} alt="Background 1" />
        </div>
        <div style={{ height: "100vh" }}>
          <img src={background2} alt="Background 2" />
        </div>
        <div style={{ height: "100vh" }}>
          <img src={background3} alt="Background 3" />
        </div>
      </Carousel>

      <div className="Portfolio__mobileHero">
        <img
          className="Portfolio__mobileHero--img1"
          src={mobileBack1}
          alt="Background1"
        />
        <img
          className="Portfolio__mobileHero--img2"
          src={mobileBack2}
          alt="Background2"
        />
        <img
          className="Portfolio__mobileHero--img3"
          src={mobileBack3}
          alt="Background3"
        />
      </div>

      <div className="Portfolio__lookbook">
        <h1>{name} Lookbook</h1>
        <SRLWrapper>
          <Gallery photos={galleryData} />
        </SRLWrapper>
      </div>
    </motion.div>
  );
}
