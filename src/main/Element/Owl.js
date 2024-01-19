import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  superLargeDesktop: {
   
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class Owl extends Component{		
	render(){
		return(
			<div class="section-full related-products content-inner bg-gray-light">
				<div class="container">
					<h2 class="title">Related products</h2>
					<div class="products-carousel">
						<Carousel 
							autoPlay={this.props.deviceType !== "mobile" ? true : false}
							responsive={responsive}
							arrows={false}							
						>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/products/birthday/item7.jpg")} alt="" />
										<div class="price">
											
										</div>
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-details'}></Link></h4>
										<Link to={'/shop-product-details'} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							
							
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/products/birthday/item5.jpg")} alt="" />
										
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
										<Link to={'/shop-product-details'} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							
							
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/products/birthday/item6.jpg")} alt="" />
										<div class="price">
											
										</div>
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-detail'}></Link></h4>
										<Link to={'/shop-product-details'} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
										
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/products/birthday/item3.jpg")} alt="" />
										
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-details'}></Link></h4>
										<Link to={'/shop-product-details'} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/products/birthday/item4.jpg")} alt="" />
										
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={'/shop-product-details'}></Link></h4>
										<Link to={"/shop-product-details"} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							
							</div>
							<div className="p-a15">
								<div class="item-box shop-item">
									<div class="item-img">
										<img src={require("./../../images/products/birthday/item1.jpg")} alt="" />
										
									</div>
									<div class="item-info text-center">
										<h4 class="item-title"><Link to={"shop-product-details"}></Link></h4>
										<Link to={"shop-product-details"} class="btn btnhover"><i class="ti-shopping-cart m-r5"></i> Add To Cart</Link>
									</div>
								</div>
							</div>
							
						</Carousel>
					</div>
				</div>		
			</div>	
		);	
	}	
}		

export default Owl;