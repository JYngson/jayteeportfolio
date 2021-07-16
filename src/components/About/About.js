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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
          tristique felis, ac gravida nulla. Proin vel enim mollis, tincidunt
          sapien sit amet, lobortis lorem. Aliquam quis auctor leo, vitae
          scelerisque nisi. Nam convallis eu eros sed auctor. Vestibulum
          venenatis eget ipsum vitae vulputate. Fusce eros mauris, ultricies sit
          amet ipsum nec, interdum mattis dolor. Morbi quis sapien eget enim
          eleifend placerat et interdum turpis. Sed gravida posuere eros. Aenean
          rutrum aliquam lacus id condimentum. Cras sit amet orci at ante
          pretium rhoncus ac quis eros. Integer euismod nulla ut enim volutpat,
          at ultrices dui rutrum. Maecenas congue, ligula ac bibendum lacinia,
          nisi ante finibus magna, non egestas metus ligula quis leo. Praesent
          scelerisque malesuada nisi, in consectetur metus egestas quis.
        </p>
      </div>
    </motion.div>
  );
}
