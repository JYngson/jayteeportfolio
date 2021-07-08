import React, { useState } from "react";
import "./Vulkan.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../data/VulkanImageData";

export default function Vulkan() {
  const [galleryData] = useState(data);

  return (
    <div className="Vulkan">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={6500}
        showThumbs={false}
      >
        <div style={{ height: "100vh" }}>
          <img src={galleryData[7].image} />
        </div>
        <div style={{ height: "100vh" }}>
          <img src={galleryData[18].image} />
        </div>
        <div style={{ height: "100vh" }}>
          <img src={galleryData[16].image} />
        </div>
      </Carousel>
      <div className="Vulkan__lookbook">
        <h1> Lookbook </h1>
        <div className="Vulkan__gallery">
          {/* {galleryData.map((card, id) => {
            return (
            );
        } */}
        </div>
      </div>
    </div>
  );
}
