import React from "react";

import Gradient from "./gradient.js";
import LogoCircle from "./logoCircle.js";

const Identity = () => {
  return (
    <div className="identity">
      <div className="svg-container">
        <Gradient cx="89.48" opacity=".9" offset=".82" />
        <LogoCircle />
      </div>
    </div>
  );
};
export default Identity;
