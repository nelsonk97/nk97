import React from "react";
import "./Content.css";
import Avatar from "@material-ui/core/Avatar";
import Image from "./Me.jpg";

function Content() {
  return (
    <div className="content">
      <div className="content__hero-container">
        <div className="content__hero">
          <Avatar
            className="content__avatar"
            alt="Nelson Khiev"
            src={Image}
            style={{
              height: "250px",
              width: "250px",
              border: "4px solid #fff",
            }}
          />
          <p className="hero-title">Introducing Nelson</p>
          <p className="hero-link">
            Junior Full Stack Developer, Fanshawe Grad, &amp; Intern
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
