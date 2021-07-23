import React, { Component } from 'react'
import Projects from './homeComponents/projects'

export default class HomePage extends Component {
  render() {
    return (
          <div id="colorlib-main">
            <h1>Artwork</h1>
            <Projects></Projects>
          </div>
    )
  }
}