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
        <p className="About__quote">
          “There are so many avenues in my life that I’m exploring - fashion,
          street dance… even my relationships with people. My art is merely a
          reflection of those experiences.” -Sleepy
        </p>
        <p className="About__bio">
          Pressured by the community around him to follow traditional
          professions of engineering and business, Sleepy’s identity as a
          fashion designer was birthed from a defiance of cultural norms and
          expectations. He describes his style as a{" "}
          <span className="About__bio--juxt">“juxtaposition”</span> - an
          exploration on contrasting properties, often between modern designer
          fashion and classic pieces, bound together by select vintage jewelry.
          Sleepy’s pieces also explore opposing themes like casual wear and
          formal wear, together creating a versatile and unique collection of
          pieces. As of recent, his interests have been focused on the idea of{" "}
          <span className="About__bio--creation">
            “creation through destruction”
          </span>
          , achieved through the medium of Boro Stitching. Never fully knowing
          what he’ll come up with, Sleepy treads the boundary between{" "}
          <span className="About__bio--chaos">chaos and order</span>, trusting
          that through the chaos of the unknown, he’ll come out with unique
          designs that push the boundaries of fashion.
        </p>
      </div>
    </motion.div>
  );
}
