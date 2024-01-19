import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

class Shoptwo extends Component {
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
                          src={require("./../../images/products/muffins/item8.jpg")}
                          alt=""
                        />
                        <div className="price">R150.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Cream-Filled Doughnut
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
                          src={require("./../../images/products/muffins/item7.jpg")}
                          alt=""
                        />

                        <div className="price">R130.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Potato Doughnuts
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
                          src={require("./../../images/products/muffins/item6.jpg")}
                          alt=""
                        />

                        <div className="price">R110.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Yeast Doughnuts
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
                          src={require("./../../images/products/muffins/item5.jpg")}
                          alt=""
                        />
                        <div className="price">R125.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Jelly Doughnut
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
                          src={require("./../../images/products/muffins/item4.jpg")}
                          alt=""
                        />
                        <span className="sale">Sale!</span>
                        <div className="price">
                          <del>R160.00</del> $35.00
                        </div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Glazed Doughnuts
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
                          src={require("./../../images/products/muffins/item3.jpg")}
                          alt=""
                        />
                        <div className="price">R135.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Boston Cream Doughnut
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
                          src={require("./../../images/products/muffins/item2.jpg")}
                          alt=""
                        />
                        <div className="price">R120.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Chocolate Doughnuts
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
                          src={require("./../../images/products/muffins/item1.jpg")}
                          alt=""
                        />

                        <div className="price">R125.00</div>
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={"/shop-product-details"}>
                            Cider Doughnuts
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

export default Shoptwo;
