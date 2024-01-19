import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component{
	
	componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var aaa = document.querySelector('.myNavbar ');

        function toggleFunc() {
            return aaa.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
		
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            navUl.forEach(el => el.classList.remove('open'));
            current.classList.add('open');
        }
	}	
	
	render(){
		
		return(
			<header className="site-header header center mo-left header-style-1">
		
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix ">
						<div className="container clearfix">
							
							<div className="logo-header mostion">
								<Link to={'/'} className="dez-page"><img src={require('./../../images/logo.png')} alt="" /></Link>
							</div>
							<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
							
							<div className="header-nav navbar-collapse navbar myNavbar collapse justify-content-between" id="navbarNavDropdown">
								<div className="logo-header mostion">
									<Link to={'/'} className="dez-page"><img src={require("./../../images/logo.png")} alt="" /></Link>
								</div>
								<ul className="nav navbar-nav nav1">	
									<li className="active"><Link to={'/'}>Home<i className=""></i></Link></li>
									<li className=""><Link to={'./our-services'}>Our Services<i className=""></i></Link></li>
									<li><Link to={'./Shoponline'}>Our Menu<i className=""></i></Link>
										
									</li>
								</ul>
								<ul className="nav navbar-nav nav2">
								<li className=""><Link to={'./booking'}>Booking<i className=""></i></Link></li>
									<li>
										<Link to={'/about-1'}>About Us <i className=""></i></Link>
									</li>
									<li><Link to={'/contact-1'}>Contact Us <i className=""></i></Link></li>
								</ul>		
							</div>
						</div>
					</div>
				</div>
       
			</header>	
		
		)
	}
	
}

export default Header;