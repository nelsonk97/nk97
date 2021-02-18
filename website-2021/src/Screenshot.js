import React from "react";
import "./Screenshot.css";

function Screenshot({ image, title, alt }) {
  return (
    <div className="screenshot">
      <h4>{title}</h4>
      <img src={image} alt={alt} />
    </div>
  );
}

export default Screenshot;
