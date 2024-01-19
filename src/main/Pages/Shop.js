import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Shop extends Component {
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
                          src={require("./../../images/products/birthday/item8.jpg")}
                          alt=""
                        />
                        <div className="price">R550.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Strawberry Top
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
                          src={require("./../../images/products/birthday/item7.jpg")}
                          alt=""
                        />

                        <div className="price">R700.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Chocolate Vanilla
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
                          src={require("./../../images/products/birthday/item6.jpg")}
                          alt=""
                        />
                        <span className="sale">Sale!</span>
                        <div className="price">
                          <del>R850.00</del> R750.00
                        </div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>Caramel</Link>
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
                          src={require("./../../images/products/birthday/item5.jpg")}
                          alt=""
                        />
                        <div className="price">R480.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Fruitilicious
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
                          src={require("./../../images/products/birthday/item4.jpg")}
                          alt=""
                        />
                        <span className="sale">Sale!</span>
                        <div className="price">
                          <del>R500.00</del> R400.00
                        </div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Vanilla Chocolate
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
                          src={require("./../../images/products/birthday/item3.jpg")}
                          alt=""
                        />
                        <div className="price">R350.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Chocolate Cake
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
                          src={require("./../../images/products/birthday/item2.jpg")}
                          alt=""
                        />
                        <div className="price">R450.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Caramel Choclate
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
                          src={require("./../../images/products/birthday/item1.jpg")}
                          alt=""
                        />

                        <div className="price">R300.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Choclate Berries
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

export default Shop;
