import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img src="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-c14bacdfa9f11216f63eae6a7a7f4713.webp" />
      <div className="hero__text">
        <p>Bugatti Chiron Sport "Les Légendes du Ciel"</p>
        <p>Exclusive Edition Paying Tribute to Legendary French Pilots</p>
      </div>
      <button>Discover More</button>
    </div>
  );
}

export default Hero;
