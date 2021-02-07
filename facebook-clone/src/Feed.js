import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://yt3.ggpht.com/ytc/AAUvwnjv7hDrjxQZmhEEmd9YbvlO8JhVGxlvwjrOPTv3NQ=s900-c-k-c0x00ffffff-no-rj"
        message="Born in the same town as Frankenstein’s Creature, the RS 6 Avant is a modern day monster. With a wider body, white LED eyes and a monstrous heart, bravery isn’t enough for the RS 6 Avant. Starting at $120,400 MSRP."
        username="Audi"
        image="https://cdn.motor1.com/images/mgl/yjgYk/s1/audi-rs6-avant.jpg"
      />
      <Post
        profilePic="https://moneyinc.com/wp-content/uploads/2018/04/porsche-logo-emblem-3d-model-obj-ma-mb.jpg"
        message="718 Cayman GT4 is the perfect sports car for those who like to push the limits. For those who would rather ask ‘why not?’ than ‘why?’. For those who take fun seriously and who would rather sit in a sports seat than a leather armchair."
        username="Porsche"
        image="https://www.driving.co.uk/s3/st-driving-prod/uploads/2019/06/2019-Porsche-718-Cayman-GT4-Reveal-02.jpg"
      />
    </div>
  );
}

export default Feed;
