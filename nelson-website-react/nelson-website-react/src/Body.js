import React from 'react'
import "./Body.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Body() {
  return (
    <div className="body">
      <div className="body__hero">
        <div className="body__hero-left">
          <p>introducing nelson.</p>
          <p>junior full stack developer.</p>
          <p>fanshawe grad.</p>
          <p>web dev intern.</p>
        </div>
        <div className="body__hero-right"></div>
      </div>
      <div className="body__section"></div>
      <div className="body__section"></div>
    </div>
  )
}

export default Body