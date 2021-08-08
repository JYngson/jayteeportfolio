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
        <p className="About__bio"></p>
      </div>
    </motion.div>
  );
}
