import React from "react";
import "./Work.css";
import Screenshot from "./Screenshot";
import Apple from "./sc-apple.png";
import Crypto from "./sc-bootsAndCats.png";
import Facebook from "./sc-facebook.png";
import TDBank from "./sc-td.png";
import Tesla from "./sc-tesla.png";
import Instagram from "./sc-instagram.png";
import YouTube from "./sc-youtube.png";

function Work() {
  return (
    <div className="work">
      <div className="work__container">
        <div className="work__content">
          <div className="work__content-top">
            <p className="work-title">Show &amp; Tell</p>
          </div>
          <div className="work__content-bottom">
            <Screenshot
              className="screenshot"
              image={Crypto}
              title="Cryptocurrency app"
            />
            <Screenshot
              className="screenshot"
              image={Apple}
              title="Apple clone"
            />
            <Screenshot
              className="screenshot"
              image={Facebook}
              title="Facebook clone"
            />
            <Screenshot
              className="screenshot"
              image={Tesla}
              title="Tesla clone"
            />
            <Screenshot
              className="screenshot"
              image={TDBank}
              title="TD clone"
            />
            <Screenshot
              className="screenshot"
              image={Instagram}
              title="Instagram clone"
            />
            <Screenshot
              className="screenshot"
              image={YouTube}
              title="YouTube clone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
