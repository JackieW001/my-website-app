import React, { Component } from 'react'
/*
export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a computer grad student from DAIICT-Gandhinagar with ICT as my major.I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!)</p>
                    <p>I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any and don't want to live anymore :P </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                </div>
                </div>
            </div>
            {*//*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            *//*}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
*/

export default class About extends Component {
    render() {
      return (
  
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p><strong>Hi, I'm Jacqueline (Jackie) Woo</strong> and I am currently a senior computer science major studying at Cornell University in Ithaca, New York. I love exploring the interesection between my passions for technology and art.</p>
                      <p>At university, I am involved with the Association for Computer Science Undergraduates (ACSU) as a graphic design lead, Cornell Cup Robotics as an electrical engineer, and Women in Computing at Cornell.</p>
                      <p>Outside of class, I love creating art! I enjoy painting and photographing landscapes as well as sculpting cute small things. I’ve also been dabbling in digital painting for a while, but I still have a lot to learn!</p>
                      <p>When I’m not studying or doodling, I enjoy hiking, playing frisbee with my friends, and wandering around New York City.</p>
                      <p>Thank you for visiting my personal website!</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                    <div className="services color-1">
                      <span className="icon2"><i className="icon-device-laptop" /></span>
                      <h3>Software Development</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="services color-2">
                      <span className="icon2"><i className="icon-bulb" /></span>
                      <h3>Graphic Design</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="services color-3">
                      <span className="icon2"><i className="icon-heart-outline" /></span>
                      <h3>Game Development</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="services color-4">
                      <span className="icon2"><i className="icon-data" /></span>
                      <h3>Data Structures and Algorithms</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
}