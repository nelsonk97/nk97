import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import LiveTvIcon from "@material-ui/icons/LiveTv";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        ></img>
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook"></input>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large"></HomeIcon>
        </div>
        <div className="header__option">
          <LiveTvIcon fontSize="large"></LiveTvIcon>
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large"></StorefrontIcon>
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large"></SupervisedUserCircleIcon>
        </div>
        <div className="header__option">
          <SportsEsportsIcon fontSize="large"></SportsEsportsIcon>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://scontent.fykz1-1.fna.fbcdn.net/v/t1.0-1/c53.0.320.320a/p320x320/92953340_3105562866175550_2575502986159587328_o.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=4fohvWSsX8YAX8muJbp&_nc_ht=scontent.fykz1-1.fna&tp=27&oh=1d5e9414696d44843ba7670cadc350db&oe=6043B178" />
          <h4>Nelson</h4>
        </div>
        <IconButton>
          <AddIcon className="dumb__icons" />
        </IconButton>
        <IconButton>
          <ForumIcon className="dumb__icons" />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon className="dumb__icons" />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon className="dumb__icons" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
