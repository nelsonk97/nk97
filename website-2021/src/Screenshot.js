import React from "react";
import "./Screenshot.css";

function Screenshot({ image, title }) {
  return (
    <div className="screenshot">
      <h4>{title}</h4>
      <img src={image} />
    </div>
  );
}

export default Screenshot;
