import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: 'url("images/img_bg.jpg")', width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 1, display: 'block', zIndex: 2 }} className="flex-active-slide">
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Hi there! <br />I'm Jackie.</h1>
                        <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1Tv433Kq-Roowu8_v5QoCnU4YN6shSNlk/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume <i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <ol className="flex-control-nav flex-control-paging" /><ul className="flex-direction-nav"><li className="flex-nav-prev"><a className="flex-prev flex-disabled" href="#" tabIndex={-1}>Previous</a></li><li className="flex-nav-next"><a className="flex-next flex-disabled" href="#" tabIndex={-1}>Next</a></li></ul>
          </ul>
        </div>
      </section>
    )
  }
}
