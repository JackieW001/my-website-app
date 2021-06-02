import React, { Component } from 'react'

import Sidebar from './sidebar'
import Introduction from './homeComponents/introduction'
import About from './homeComponents/about'
import Projects from './homeComponents/projects'
import Timeline from './homeComponents/timeline'
import Contact from './homeComponents/contact';

export default class HomePage extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Projects></Projects>
            <Timeline></Timeline>
            <Contact></Contact>
          </div>
        </div>
      </div>
    )
  }
}