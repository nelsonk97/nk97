import React from 'react'
import "./Body.css"
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

function Body() {
  return (
    <div className="body">
      <div className="body__container">
        <div className="body__hero">
          <p>junior <span className="body__catchword">full stack</span> developer.</p>
          <p><span className="body__catchword">fanshawe</span> grad.</p>
          <p><span className="body__catchword">web dev</span> intern.</p>
        </div>
        <div className="body__section">
        </div>
      </div>
    </div>
  )
}

export default Body
