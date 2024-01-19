import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Shopone extends Component {
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
                          src={require("./../../images/products/cupcakes/item8.jpg")}
                          alt=""
                        />
                        <div className="price">R155.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Chocolate Cupcake
                          </Link>
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
                          src={require("./../../images/products/cupcakes/item7.jpg")}
                          alt=""
                        />

                        <div className="price">R135.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Carrot Cake Cupcake
                          </Link>
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
                          src={require("./../../images/products/cupcakes/item6.jpg")}
                          alt=""
                        />
                        <span className="sale">Sale!</span>
                        <div className="price">
                          <del>125.00</del> R100.00
                        </div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Vanilla Cupcake
                          </Link>
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
                          src={require("./../../images/products/cupcakes/item5.jpg")}
                          alt=""
                        />
                        <div className="price">R180.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Red Velvet Cupcake
                          </Link>
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
                          src={require("./../../images/products/cupcakes/item4.jpg")}
                          alt=""
                        />
                        <span className="sale">Sale!</span>
                        <div className="price">
                          <del>R225.00</del> 180.00
                        </div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Peanut Butter Cupcake
                          </Link>
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
                          src={require("./../../images/products/cupcakes/item3.jpg")}
                          alt=""
                        />
                        <div className="price">R110.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Pumpkin Cupcake
                          </Link>
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
                          src={require("./../../images/products/cupcakes/item2.jpg")}
                          alt=""
                        />
                        <div className="price">R120.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Caramel Cupcake
                          </Link>
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
                          src={require("./../../images/products/cupcakes/item1.jpg")}
                          alt=""
                        />

                        <div className="price">R140.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Coffee Cupcake
                          </Link>
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

export default Shopone;
