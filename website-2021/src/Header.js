import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Route>
        <div className="header__left">
          <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
            <p className="title">Nelson</p>
          </Link>
        </div>
        <div className="header__right">
          <Link to={"/about"} style={{ textDecoration: "none", color: "#000" }}>
            <p className="link">About</p>
          </Link>{" "}
          <Link to={"/work"} style={{ textDecoration: "none", color: "#000" }}>
            <p className="link">Work</p>
          </Link>
          <Link
            to={"/contact"}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <p className="link">Contact</p>
          </Link>
        </div>
      </Route>
    </div>
  );
}

export default Header;
