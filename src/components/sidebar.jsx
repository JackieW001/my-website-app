import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
            <h1 id="colorlib-logo"><a href="index.html">Jackie Woo</a></h1>
            <span className="position">Cornell '22 <br></br> Software Developer and Artist</span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/art">Art</Link></li>
            </ul>
            {/* </div> */}
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <li><a href="https://www.linkedin.com/in/jacqueline-woo-646398156/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              <li><a href="https://github.com/JackieW001" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
            </ul>
          </nav>
          <div className="colorlib-footer">
            <p><small>
              Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-headphones" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration
              </small></p>
          </div>
        </aside>
      </div>
    )
  }
}
