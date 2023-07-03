import React from 'react'
import "./Nav.css"

export default function Nav() {
  return (
    <div className="nav">
      <div className="main-page-link">
        <a href="#top">CODY</a>
      </div>
      <div className="nav-item">
        <a href="#work">Work</a>
      </div>
      <div className="nav-item">
        <a href="#about">About</a>
      </div>
      <div className="nav-item">
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}
