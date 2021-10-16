import React, { useState } from "react";
import "./CustomPieces.scss";
import { customGallery } from "../../data/CustomImageData";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";

export default function CustomPieces() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="CustomPieces">
      {/* <Carousel
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
      </Carousel> */}
      <div className="CustomPieces__gallery">
        {customGallery.map((photo) => {
          return (
            <div className="CustomPieces__galleryImageDiv" onClick={openModal}>
              <img
                alt={photo.name}
                src={`${photo.src}`}
                className="CustomPieces__galleryImage"
              />
              <Modal isOpen={modalOpen} className="CustomPieces__modal">
                <h1>The Modal Is Open!</h1>
                <button onClick={closeModal}>Close Me</button>
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
