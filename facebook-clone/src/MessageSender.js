import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core/";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://scontent.fykz1-1.fna.fbcdn.net/v/t1.0-1/c53.0.320.320a/p320x320/92953340_3105562866175550_2575502986159587328_o.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=4fohvWSsX8YAX8muJbp&_nc_ht=scontent.fykz1-1.fna&tp=27&oh=1d5e9414696d44843ba7670cadc350db&oe=6043B178" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={"What's on your mind, Nelson Khiev?"}
          ></input>
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
