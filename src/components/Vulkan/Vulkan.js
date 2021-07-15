import React from "react";
import "./Vulkan.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../data/VulkanImageData.js";
import background1 from "../../assets/images/Vulkan/IMG_9486.jpg";
import background2 from "../../assets/images/SevenTeenTwentyThree/IMG_9850.JPG";
import background3 from "../../assets/images/SevenTeenTwentyThree/IMG_2899.JPG";

export default function Vulkan() {
  return (
    <div className="Vulkan">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={6500}
        showThumbs={false}
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
      <div className="Vulkan__lookbook">
        <h1> Lookbook </h1>
        <SRLWrapper>
          <Gallery photos={data} />
        </SRLWrapper>
      </div>
    </div>
  );
}
