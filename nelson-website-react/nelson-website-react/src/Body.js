import React from 'react'
import "./Body.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Body() {
  return (
    <div className="body">
      <div className="body__container">
        <div className="body__hero">
          <p>junior <span className="body__catchword">full stack</span> developer.</p>
          <p><span className="body__catchword">fanshawe</span> grad.</p>
          <p><span className="body__catchword">web dev</span> intern.</p>
          <div className="body__social">
            <LinkedInIcon style={{marginTop: "15px", marginRight: "20px", height: "40px", width: "40px", color: "#121212"}}/>
            <GitHubIcon style={{marginRight: "15px",height: "40px", width: "40px", color: "#121212"}}/>
          </div>
        </div>
        <div className="body__section">
          <div className="body__box" id="body__box1"></div>
          <div className="body__box" id="body__box2"></div>
          <div className="body__box" id="body__box3"></div>
          <div className="body__box" id="body__box4"></div>
          <div className="body__box" id="body__box5"></div>
          <div className="body__box" id="body__box6"></div>
        </div>
      </div>
    </div>
  )
}

export default Body
