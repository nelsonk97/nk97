import React from "react";
import "./Contact.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__content-top">
            <p className="contact-title">Call me maybe</p>
          </div>
          <div className="contact__content-bottom">
            <p className="contact-content">
              Ooooooh yes! Glad to see you ending up on here. This is only the
              beginning of an amazing relationship. If you haven't done so
              already, feel free to check out his LinkedIn and GitHub repo. He
              will respond back to you as soon as possible.
              <br></br>
              <br></br>
              <LinkedInIcon
                className={"icon"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/nelsonkhiev/")
                }
              />
              <MailOutlineIcon
                className={"icon"}
                onClick={() => window.open("mailto:nelsonkhiev@gmail.com")}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

{
  /* <div className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__content-top">
            <p className="contact-title">Call a friend</p>
          </div>
          <div className="contact__content-bottom">
            <p className="contact-content">
              You read about him. <br></br>You heard about him. <br></br>You visited his LinkedIn. <br></br>You saw his GitHub. <br></br>Next, you talk to him.
              <br></br><br></br>
              <LinkedInIcon className={"icon"} onClick={() => window.open('https://www.linkedin.com/in/nelsonkhiev/')}/><MailOutlineIcon className={"icon"}  onClick={() => window.open("mailto:nelsonkhiev@gmail.com")}/>
              <br></br><br></br>
            </p>
          </div>
        </div>
      </div>
    </div> */
}
