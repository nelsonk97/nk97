import React from 'react'
import "./Body.css"
import MediaQuery from 'react-responsive'

function Body() {
  return (
    <div className="body">
      <div className="body__container">
        <div className="body__hero">
          <p><span className="body__catchword">New</span> grad.</p>
          <p><span className="body__catchword">Forward</span> way of thinking.</p>
          <p><span className="body__catchword">Ready</span> for hire.</p>
        </div>
      </div>
    </div>
  )
}

export default Body
