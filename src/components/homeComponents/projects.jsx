import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<section className="colorlib-work" data-section="work">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box fadeInUp animated">Recent Projects</h2>
						</div>
					</div>
					{/* <div className="row row-bottom-padded-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
						<div className="col-md-12">
							<p className="work-menu"><span><a href="#">Software</a></span> <span><a href="#">Graphic Design</a></span> <span><a href="#">Art</a></span></p>
						</div>
					</div> */}
					<div className="row">
						<div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
							<div className="project" style={{ backgroundImage: 'url(images/img-1.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">This Website</a></h3>
										<span>Website</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
							<div className="project" style={{ backgroundImage: 'url(images/img-2.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Core Impact</a></h3>
										<span>Game</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInTop">
							<div className="project" style={{ backgroundImage: 'url(images/img-3.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Cornell Cup</a></h3>
										<span>Robotics</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
							<div className="project" style={{ backgroundImage: 'url(images/img-4.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">The Night Watch</a></h3>
										<span>Game</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
							<div className="project" style={{ backgroundImage: 'url(images/img-5.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Notevana</a></h3>
										<span>Machine Learning App</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div> */}
						{/* <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
							<div className="project" style={{ backgroundImage: 'url(images/img-6.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Stuyvesant Science Olympiad Mission Possible</a></h3>
										<span>Mechatronics</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div> */}
					</div>

					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
							<h2 className="colorlib-heading animate-box fadeInUp animated">Recent Artwork</h2>
						</div>
						{/* <div className="col-md-12 animate-box fadeInUp animated">
							<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
						</div> */}
					</div>
					<div className="row">
						<div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
							<div className="project" style={{ backgroundImage: 'url(images/img-1.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">This Website</a></h3>
										<span>Website</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
							<div className="project" style={{ backgroundImage: 'url(images/img-2.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Core Impact</a></h3>
										<span>Game</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInTop">
							<div className="project" style={{ backgroundImage: 'url(images/img-3.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Cornell Cup</a></h3>
										<span>Robotics</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
							<div className="project" style={{ backgroundImage: 'url(images/img-4.jpg)' }}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">The Night Watch</a></h3>
										<span>Game</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
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
