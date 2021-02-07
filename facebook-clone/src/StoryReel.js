import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://robbreport.com/wp-content/uploads/2020/07/6-3.jpg?w=1000"
        profileSrc="https://i.pinimg.com/originals/9a/fd/ed/9afded4adf3d90be93854870ccd3f352.jpg"
        title="Lamborghini"
      />
      <Story
        image="https://www.bugatti.com/fileadmin/_processed_/sei/p54/se-image-ea445e45baad6c053b6eabf75dbb594e.jpg"
        profileSrc="https://i.pinimg.com/originals/c8/7a/4c/c87a4c407ae775e81bca411590d72dd4.jpg"
        title="Bugatti"
      />
      <Story
        image="https://cdn.shopify.com/s/files/1/2784/4966/products/M5971-8_-_McLaren_P15_Senna_Lights_Working_-_Front_3.4_4000x2677_crop_center.jpg?v=1601658050"
        profileSrc="https://formularapida.net/wp-content/uploads/2019/01/DxG7bOQXgAEul7l.jpg"
        title="McLaren"
      />
      <Story
        image="https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/news-article/2020/03/1d4d15c79f93e5d90cb1ae34b315fbc1/_dsc4662.jpg?itok=7_loL0h-"
        profileSrc="https://ih1.redbubble.net/image.1050610726.8595/st,small,507x507-pad,600x600,f8f8f8.jpg"
        title="Koenigsegg"
      />
      <Story
        image="https://www.ritholtz.com/blog/wp-content/uploads/2013/03/Lykan-Hypersport-rear-view.jpg"
        profileSrc="https://i.pinimg.com/originals/fb/f2/e3/fbf2e3b760acea08353336795a026e99.jpg"
        title="Lykan"
      />
    </div>
  );
}

export default StoryReel;
