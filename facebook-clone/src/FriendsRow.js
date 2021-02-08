import React from "react";
import "./FriendsRow.css";
import { Avatar } from "@material-ui/core/";

function FriendsRow({ src, Icon, title }) {
  return (
    <div className="friendsRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default FriendsRow;
