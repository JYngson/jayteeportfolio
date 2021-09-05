import React from "react";
import "./About.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    boxShadow: "-1px -1px 200px 200px rgba(0, 0, 0, 0.7) inset",
  },
  in: {
    boxShadow: "-1px -1px 0px -200px rgba(0, 0, 0, 0.7) inset",
  },
  out: {
    opacity: 0,
  },
};

const transition = {
  duration: 1,
};

export default function About() {
  return (
    <motion.div
      className="About"
      initial="initial"
      animate="in"
      exit="out"
      transition={transition}
      variants={variants}
    >
      <div className="About__container">
        <p className="About__bio">
          Influenced by the circulating market of fashion, Sleepy’s philosophy
          as a designer centers around the{" "}
          <span className="About__bio--life">
            extension of life and revival
          </span>{" "}
          of vintage pieces. Combating the destructive nature of fast fashion,
          Sleepy puts careful diligence on the ethical sourcing of his garments.
          <br />
          <br />
          Sleepy describes his styling vision as a{" "}
          <span className="About__bio--juxt">“juxtaposition”</span> - an
          exploration of contrasting properties, often between modern designer
          fashion and classic pieces, bound together by select vintage jewelry.
          Sleepy’s pieces also explore opposing themes like street style and
          avant-garde, with the aim of striking a balance between two distinct
          markets.
          <br />
          <br />
          As of recently, Sleepy’s interests have been concentrated on the
          medium of Boro Stitching. His present work has been focused on
          creating{" "}
          <span className="About__bio--glitch">“glitches in perfection”</span> -
          taking a finished product and infusing his personal touch onto it.
          Sleepy’s newest designs hope to further enhance what the original
          manufacturers deemed “standard”, breathing in an unconventional beauty
          to already finished products.
        </p>
      </div>
    </motion.div>
  );
}
