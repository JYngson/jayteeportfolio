import React from "react";
import "./test.scss";

export default function test() {
  return (
    <div className="component">
      <div className="component__navbar"></div>
      <div className="component__desktopDivide">
        <div className="component__menu" />
        <div className="component__content">
          <p className="component__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
            posuere tellus. Aliquam vitae posuere est, vel rutrum turpis. Ut et
            accumsan orci. Morbi luctus sollicitudin diam, sit amet elementum
            tellus gravida eu. Cras dui magna, tristique at ipsum in, euismod
            molestie ante. Nulla lobortis massa sit amet neque tincidunt, et
            aliquet nisi sagittis. Mauris et ex enim. Nam lacus nibh, varius nec
            diam non, scelerisque semper mi.
          </p>
          <div className="component__imgBox">
            <div className="component__img1" />
            <div className="component__img2" />
          </div>
        </div>
      </div>
    </div>
  );
}
