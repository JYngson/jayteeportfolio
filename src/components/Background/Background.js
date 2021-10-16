import React from "react";
import "./Background.scss";
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
    ></motion.div>
  );
}
