import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var bgfoter = require('./../../images/products/background/backbread.jpg');	


class Footer extends Component{
	
	render(){
		return(
			<footer className="site-footer " style={{backgroundImage: "url(" + bgfoter + ")", backgroundSize: 'cover'}} >
				
				<div className="footer-top bg-">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_getintuch">
									<h5 className="footer-title text-white">Contact Us</h5>
									<ul>
										<li>
											<i className="fa fa-map-marker"></i> 
											<p>242 Pine Road Durban</p>
										</li>
										<li>
											<i className="fa fa-phone"></i> 
											<p>071 793 1462</p>
										</li>
										<li>
											<i className="fa fa-mobile"></i> 
											<p>031 285 4426</p>
										</li>
										<li>
											<i className="fa fa-envelope"></i> 
											<p>info@solzbakery.co.za</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget recent-posts-entry">
									<h4 className="footer-title">Recent Post</h4>
									<div className="widget-post-bx">
										<div className="widget-post clearfix">
											<div className="dlab-post-media radius-sm"> 
												<img src= {require('./../../images/cake1.jpg')} alt="" /> 
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'/blog-single'}>Excellent service keep up the good work</Link></h6>
												</div>
												<div className="dlab-post-meta">
													<ul>
														<li className="post-date"> <i className="la la-clock-o"></i><strong>January 07, 2024</strong> </li>
													</ul>
												</div>
											</div>
										</div>
										<div className="widget-post clearfix">
											<div className="dlab-post-media radius-sm"> 
												<img src= {require('./../../images/cake1.jpg')} alt="" /> 
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'blog-single'}>The best in South Africa, I agree</Link></h6>
												</div>
												<div className="dlab-post-meta">
													<ul>
														<li className="post-date"> <i className="la la-clock-o"></i><strong>January 13, 2024</strong> </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_services border-0">
								   <h4 className="footer-title">Quick Links</h4>
									<ul className="list-2">
										<li><Link to={'/'}>Home</Link></li>
										<li><Link to={'/About'}>About</Link></li>
										<li><Link to={'/Shoponline'}>Our Menu</Link></li>
										
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget border-0">
								   <h4 className="footer-title">Opening Hours</h4>
								   <p className="m-b20">Our support available to help you 24 hours a day, seven days a week.</p>
									<ul className="work-hour-list">
										<li>
											<span className="day"><span>Monday to Friday</span></span> 
											<span className="timing">7AM - 5PM</span>
										</li>
										<li>
											<span className="day"><span>Saturday</span></span>
											<span className="timing">10AM - 5PM</span>
										</li>
										<li>
											<span className="day"><span>Sunday</span></span>
											<span className="timing">Closed</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 text-left"> <span>Copyright © 2024. coded by Solomon Nodokwana.</span> </div>
							<div className="col-lg-6 col-md-6 text-right"> 
								<div className="widget-link"> 
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			
		)
		
	}
}

export default Footer;