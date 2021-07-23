import React, { Component } from 'react'

import WebsiteCard from "./projectsComponents/websiteCard"
import CoreImpactCard from "./projectsComponents/coreimpactCard"
import CornellCupCard from "./projectsComponents/cornellcupCard"
import NightWatchCard from "./projectsComponents/nightwatchCard"
import NotevanaCard from "./projectsComponents/notevanaCard"
import SciolyCard from "./projectsComponents/sciolyCard"

export default class ProjectsPage extends Component {
  render() {
    return (
      <div id="colorlib-main">
        <section className="colorlib-work">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box fadeInUp animated">Recent Projects</h2>
              </div>
            </div>
            <div className="row">
              <WebsiteCard />
              <CoreImpactCard />
              <CornellCupCard />
              <NightWatchCard />
              <NotevanaCard />
              <SciolyCard />
            </div>
          </div>
        </section>
      </div>
    )
  }
}