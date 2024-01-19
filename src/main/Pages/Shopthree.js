import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

class Shopthree extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          <div className="">
            <div className="container">
              <div className="dlab-bnr-inr-entry">
                <div className="breadcrumb-row"></div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="section-full content-inner bg-gray-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="item-box shop-item">
                      <div className="item-img">
                        <img
                          src={require("./../../images/products/wedding/item8.jpg")}
                          alt=""
                        />
                        <div className="price">R1500.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}></Link>
                        </h4>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          <i className="ti-shopping-cart m-r5"></i> Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="item-box shop-item">
                      <div className="item-img">
                        <img
                          src={require("./../../images/products/wedding/item7.jpg")}
                          alt=""
                        />

                        <div className="price">R2000.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}></Link>
                        </h4>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          <i className="ti-shopping-cart m-r5"></i> Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="item-box shop-item">
                      <div className="item-img">
                        <img
                          src={require("./../../images/products/wedding/item6.jpg")}
                          alt=""
                        />
                        <span className="sale">Sale!</span>
                        <div className="price">R1300.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}></Link>
                        </h4>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          <i className="ti-shopping-cart m-r5"></i> Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="item-box shop-item">
                      <div className="item-img">
                        <img
                          src={require("./../../images/products/wedding/item5.jpg")}
                          alt=""
                        />
                        <div className="price">R1800.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}></Link>
                        </h4>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          <i className="ti-shopping-cart m-r5"></i> Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="item-box shop-item">
                      <div className="item-img">
                        <img
                          src={require("./../../images/products/wedding/item4.jpg")}
                          alt=""
                        />

                        <div className="price">R2500.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}></Link>
                        </h4>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          <i className="ti-shopping-cart m-r5"></i> Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="item-box shop-item">
                      <div className="item-img">
                        <img
                          src={require("./../../images/products/wedding/item3.jpg")}
                          alt=""
                        />
                        <div className="price">R3000.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}></Link>
                        </h4>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          <i className="ti-shopping-cart m-r5"></i> Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="item-box shop-item">
                      <div className="item-img">
                        <img
                          src={require("./../../images/products/wedding/item2.jpg")}
                          alt=""
                        />
                        <div className="price">R1600.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}></Link>
                        </h4>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          <i className="ti-shopping-cart m-r5"></i> Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="item-box shop-item">
                      <div className="item-img">
                        <img
                          src={require("./../../images/products/wedding/item1.jpg")}
                          alt=""
                        />
                        <span className="sale">Sale!</span>
                        <div className="price">R1700.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}></Link>
                        </h4>
                        <Link
                          to={"/shop-product-details"}
                          className="btn btnhover"
                        >
                          <i className="ti-shopping-cart m-r5"></i> Add To Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Shopthree;
