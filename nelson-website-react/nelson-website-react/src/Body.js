import React from 'react'
import "./Body.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Body() {
  return (
    <div className="body">
      <div className="body__hero">
          <p id="tagline">introducing <span className="hero-tag">nelson.</span></p>
          <p><span className="hero-tag">junior full stack</span> developer.</p>
          <p><span className="hero-tag">fanshawe</span> grad.</p>
          <p><span className="hero-tag">web dev</span> intern.</p>
      </div>
      <div className="body__section"></div>
    </div>
  )
}

export default Body