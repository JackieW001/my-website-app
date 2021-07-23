import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Alarm.com, <i>Software Developer</i> <span>Jun 2021 - Present</span></h2>
                        <p>I’ve recently joined Alarm.com, a home automation cloud service provider, as a software developer on the Video team!</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pencil" />
                      </div>
                      <div className="timeline-label">
                        <h2>Cornell ACSU, <i>Graphic Design Lead</i> <span>Dec 2020 - Present</span></h2>
                        <p>ACSU (Association of Computer Science Undergraduates) brings technology companies, speakers, and professors to students at Cornell. On the graphic design team, we create eye catching posters to advertise ACSU events and design awesome merch!</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>Disney Streaming Services, <i>Quality Assurance Automation Intern</i> <span>Jun 2020 - Jan 2021</span></h2>
                        <p>My time at DSS was filled with lots of Mickey Mouse ears and Disney+! I worked on the Quality Assurance Automation team creating automated tests and building out the testing infrastructure for Disney+ on Roku and PS4.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
