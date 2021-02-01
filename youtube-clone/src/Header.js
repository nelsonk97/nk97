import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__menu"/>
        <Link to={"/"}>
          <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""></img>
        </Link>
      </div>

      <div className="header__input">
        <input className="header__inputBox" onChange={e => setInputSearch(e.target.value)} placeholder="Search" type="text"/>
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton"/>
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar 
          alt="Nelson Khiev" 
          src="https://media-exp1.licdn.com/dms/image/C5603AQHLAMJRpBIvyA/profile-displayphoto-shrink_100_100/0/1567783961273?e=1617235200&v=beta&t=-dZ8XJFeJUpnbYL2zsEZN9yKhkaeFJeTQwrIn_Mgsak"/>
      </div>
    </div>
  )
}

export default Header
