import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";



class Booking extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-content bg-white">
          <div className="section-full content-inner">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 m-b30">
                  <div className="appointment-form">
                    <div className="section-head m-b30">
                      <h2 className="main-title">Craving something sweet?</h2>
                      <p>
                        Reserve your blissful bites at Solz Bakery! Book now for
                        a taste of indulgence. <span></span>🍰✨
                      </p>
                    </div>
                    <div className="dzFormMsg"></div>
                    <form
                      method="post"
                      className="dzForm"
                      action="script/contact.php"
                    >
                      <input type="hidden" value="Contact" name="dzToDo" />
                      <div className="row sp15">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="dzName"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="dzEmail"
                                type="email"
                                className="form-control"
                                required
                                placeholder="Your Email Id"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="dzPhone"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder="Time"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                name="dzPhone"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Location"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                required
                                placeholder="Date"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <div className="input-group">
                              <textarea
                                name="dzMessage"
                                rows="4"
                                className="form-control"
                                required
                                placeholder="Your Message..."
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <div className="input-group">
                              <div
                                className="g-recaptcha"
                                data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                data-callback="verifyRecaptchaCallback"
                                data-expired-callback="expiredRecaptchaCallback"
                              ></div>
                              <input
                                className="form-control d-none"
                                style={{ display: "none" }}
                                data-recaptcha="true"
                                required
                                data-error="Please complete the Captcha"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            name="submit"
                            type="submit"
                            value="Submit"
                            className="btn btnhover"
                          >
                            CONTACT US
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 m-b30">
                  <img
                    src={require("./../../images/products/Bookings/pic7.jpg")}
                    alt=""
                    className="img-cover radius-sm"
                  />
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

export default Booking;
