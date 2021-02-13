import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
      </div>
      <div className="header__center">
        <img src="https://www.bugatti.com/typo3conf/ext/bugatti_sitepackage/Resources/Public/Images/Logo/logo-bugatti_168x87.webp" />
      </div>
      <div className="header__right">
        <p>Find a dealer</p>
        <RoomOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
