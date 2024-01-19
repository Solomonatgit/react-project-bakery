import React, { Component } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Owl from "./../Element/Owl";
import { Form } from "react-bootstrap";

class Shopproduct extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div className="content-block">
            <div className="section-full content-inner-1 bg-gray-light">
              <div className="container woo-entry">
                <div className="row">
                  <div className="col-lg-6 m-b30">
                    <div
                      className="product-gallery on-show-slider lightgallery"
                      id="lightgallery"
                    >
                      <div className="dlab-box">
                        <div className="dlab-thum-bx">
                          <img
                            src={require("./../../images/products/birthday/item7.jpg")}
                            alt=""
                          />
                          <span
                            data-exthumbimage="images/product/item2.jpg"
                            data-src={require("./../../images/products/birthday/item7.jpg")}
                            className="check-km"
                            title="Image 1 Title will come here"
                          >
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 m-b30">
                    <form method="submit" className="cart sticky-top">
                      <div className="dlab-post-title">
                        <h4 className="post-title">Chocolate Vanilla</h4>
                        <p className="m-b10"></p>
                        <div className="dlab-divider bg-gray tb15">
                          <i className="icon-dot c-square"></i>
                        </div>
                      </div>
                      <div className="relative">
                        <h3 className="m-tb10">R700.00 </h3>
                        <div className="shop-item-rating">
                          <span className="rating-bx">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                          </span>
                          <span>4.5 Rating</span>
                        </div>
                      </div>

                      <div className="dlab-divider bg-gray tb15">
                        <i className="icon-dot c-square"></i>
                      </div>
                      <div className="row">
                        <div className="m-b30 col-md-7 col-sm-8">
                          <h6>Product Size</h6>
                          <div
                            className="btn-group product-item-size"
                            data-toggle="buttons"
                          >
                            <label className="btn">
                              <input name="options" id="option7" type="radio" />{" "}
                              Large
                            </label>
                            <label className="btn active">
                              <input
                                name="options "
                                id="option8"
                                type="radio"
                              />{" "}
                              Medium
                            </label>
                            <label className="btn">
                              <input name="options" id="option9" type="radio" />{" "}
                              Small
                            </label>
                          </div>
                        </div>
                        <div className="m-b30 col-md-5 col-sm-4">
                          <h6>Select quantity</h6>
                          <div className="quantity btn-quantity style-2">
                            <Form>
                              <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Control as="select" custom>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </Form.Control>
                              </Form.Group>
                            </Form>
                          </div>
                        </div>
                      </div>
                      <button className="btn btnhover">
                        <i className="ti-shopping-cart"></i>Add To Cart
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <Owl />
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Shopproduct;
