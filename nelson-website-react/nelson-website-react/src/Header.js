import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
  return (
    <div className="body">
      <div className="header">
        <div className="sidebar" id="sidebar">
          <CloseIcon className={"close-button"} onClick={event => document.getElementById("sidebar").style.display = "none"}/>
        </div>
        <div className="header__content">
          <p>nelson</p>
          <MenuIcon className={"button"} style={{backgroundColor: "inherit"}} onClick={event => document.getElementById("sidebar").style.display = "block"}/>
        </div>
      </div>
    </div>
  )
}

export default Header