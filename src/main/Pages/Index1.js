import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import Slider from "./../Element/Slider";

//Images
var serblog1 = require("./../../images/products/mid-sec/pic1.jpg");
var serblog2 = require("./../../images/products/mid-sec/pic2.jpg");
var serblog3 = require("./../../images/products/mid-sec/pic3.jpg");
var serblog4 = require("./../../images/products/mid-sec/pic4.jpg");

class Index1 extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          <div className="content-block">
            <Slider />
            <div className="section-full content-inner-3">
              <div className="container">
                <div className="row service-area1">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{ backgroundImage: "url(" + serblog1 + ")" }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">
                          Birthday Cakes
                        </h2>
                        <p></p>
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link to={"/shop"} className="btn btnhover">
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{ backgroundImage: "url(" + serblog2 + ")" }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">CupCakes</h2>
                        <p></p>
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link to={"/shopone"} className="btn btnhover">
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{ backgroundImage: "url(" + serblog3 + ")" }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">Doughnuts</h2>
                        <p></p>
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link to={"/shoptwo"} className="btn btnhover">
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div
                      className="icon-bx-wraper text-center service-box1"
                      style={{ backgroundImage: "url(" + serblog4 + ")" }}
                    >
                      <div className="icon-content">
                        <h2 className="dlab-tilte text-white">Wedding Cakes</h2>
                        <p></p>
                        <div className="dlab-separator style1 bg-primary"></div>
                        <Link to={"/shopthree"} className="btn btnhover">
                          More details{" "}
                          <i className="fa fa-angle-double-right m-l5"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head mb-0 text-center">
                      <div className="icon-bx icon-bx-xl">
                        <img src={require("./../../images/cake1.jpg")} alt="" />
                      </div>
                      <h3 className="text-primary">
                        Get ready to indulge in a celebration of flavors at Solz
                        Bakery!<span></span>🎉
                      </h3>
                      <p className="main-text">
                        You're cordially invited to join our exclusive Solz{" "}
                        <strong>Bakery</strong> family, where delightful treats
                        and exceptional perks await.
                      </p>
                      <p>
                        experience the ease of ordering and paying right from
                        your phone - plus, so much more!{" "}
                        <Link to={"/Booking"}>Join Now</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-full bg-white">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/products/bakery/baguette.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Baguette</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/products/bakery/Challah.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Challah</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/products/bakery/brioche.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Brioche</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="port-box1 text-white m-md-b0 m-sm-b0">
                      <div className="dlab-media">
                        <img
                          src={require("./../../images/products/bakery/focaccia.jpg")}
                          alt=""
                        />
                      </div>
                      <div className="dlab-info">
                        <h2 className="title">Focaccia</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </>
    );
  }
}

export default Index1;
