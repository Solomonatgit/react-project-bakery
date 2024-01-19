import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Ourservices extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content bg-white">
          <div className="content-block">
            <div className="section-full bg-white content-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center">
                      <h3>We’Ve Got You Covered!</h3>
                      <p>What You Get With Us</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                      <div className="icon-bx-md bg-primary radius m-b20">
                        <span className="icon-cell">
                          <img
                            src={require("./../../images/products/our_services/icon3.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte m-b5">Freshly Baked Goods</h4>
                        <p>
                          Providing a daily selection of freshly baked bread,
                          pastries, cakes, and other baked goods is a
                          fundamental service of any bakery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                      <div className="icon-bx-md bg-primary radius m-b20">
                        <span className="icon-cell">
                          <img
                            src={require("./../../images/products/our_services/icon1.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte m-b5">Custom Cake Design</h4>
                        <p>
                          Offering custom cake design services for special
                          occasions such as birthdays, weddings, anniversaries,
                          and other celebrations, allowing customers to
                          personalize their cakes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                      <div className="icon-bx-md bg-primary radius m-b20">
                        <span className="icon-cell">
                          <img
                            src={require("./../../images/products/our_services/icon5.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte m-b5">Catering Services</h4>
                        <p>
                          Providing catering services for events and gatherings,
                          including the preparation and delivery of an
                          assortment of bakery items, such as sandwiches,
                          pastries, and desserts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="icon-bx-wraper bx-style-1 bg-white p-a30 center fly-box-ho">
                      <div className="icon-bx-md bg-primary radius m-b20">
                        <span className="icon-cell">
                          <img
                            src={require("./../../images/products/our_services/icon4.png")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte m-b5">
                          Takeout and Delivery
                        </h4>
                        <p>
                          Offering the convenience of takeout and delivery
                          services for customers who prefer enjoying bakery
                          delights at home or their preferred locations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
export default Ourservices;
