import React from "react";
import "./Background.scss";
import Jaytee from "../../assets/Jaytee.jpg";
import { motion } from "framer-motion";

const transition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default function Background({ background, visible }) {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={transition}
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
    </motion.div>
  );
}
