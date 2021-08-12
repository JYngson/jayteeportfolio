import React from "react";
import "./Vulkan.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../data/VulkanImageData.js";
import background1 from "../../assets/images/Vulkan/IMG_9486.jpg";
import background2 from "../../assets/images/SevenTeenTwentyThree/IMG_9850.JPG";
import background3 from "../../assets/images/SevenTeenTwentyThree/IMG_2899.JPG";
import mobileBack1 from "../../assets/images/Vulkan/IMG_0061.JPG";
import mobileBack2 from "../../assets/images/Vulkan/IMG_9186.jpg_new_.jpg";
import mobileBack3 from "../../assets/images/SevenTeenTwentyThree/s.3.jpg";

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

export default function Vulkan() {
  return (
    <motion.div
      className="Vulkan"
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
        className="Vulkan__hero"
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

      <div className="Vulkan__mobileHero">
        <img
          className="Vulkan__mobileHero--img1"
          src={mobileBack1}
          alt="Background1"
        />
        <img
          className="Vulkan__mobileHero--img2"
          src={mobileBack2}
          alt="Background2"
        />{" "}
        //
        <img
          className="Vulkan__mobileHero--img3"
          src={mobileBack3}
          alt="Background3"
        />
        <h2 className="Vulkan__mobileHero--header">- Vulkan -</h2>
      </div>

      <div className="Vulkan__lookbook">
        <h1> Lookbook </h1>
        <SRLWrapper>
          <Gallery photos={data} />
        </SRLWrapper>
      </div>
    </motion.div>
  );
}
