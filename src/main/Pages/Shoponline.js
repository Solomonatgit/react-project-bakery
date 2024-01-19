import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ourMenu = [
  {
    image: require("./../../images/products/our menu/cupcakes.jpg"),
    title: "Cupcakes",
  },
];

const ourMenu1 = [
  {
    image: require("./../../images/products/our menu/birthday.jpg"),
    title: "Birthday Cakes",
  },
];

const ourMenu2 = [
  {
    image: require("./../../images/products/our menu/wedding.jpg"),
    title: "Wedding Cakes",
  },
];

const ourMenu3 = [
  {
    image: require("./../../images/products/our menu//muffins.jpg"),
    title: "Muffins",
  },
];

const ourMenu4 = [
  {
    image: require("./../../images/products/our menu/doughnuts.jpg"),
    title: "Doughnuts",
  },
];

const ourMenu5 = [
  {
    image: require("./../../images/products/our menu/cream_rolls.jpg"),
    title: "Cream Rolls",
  },
];

class Shoponline extends Component {
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

          <div className="content-block"></div>
        </div>{" "}
        <br />
        <div className="row">
          {ourMenu.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="blog-post blog-grid blog-rounded">
                <div className="dlab-post-media dlab-img-effect">
                  <Link to={"/Shopone"}>
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="dlab-info p-a25">
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link to={"/Shopone"}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {ourMenu1.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="blog-post blog-grid blog-rounded">
                <div className="dlab-post-media dlab-img-effect">
                  <Link to={"/Shop"}>
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="dlab-info p-a25">
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link to={"/Shop"}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {ourMenu2.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="blog-post blog-grid blog-rounded">
                <div className="dlab-post-media dlab-img-effect">
                  <Link to={"/Shopthree"}>
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="dlab-info p-a25">
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link to={"/Shopthree"}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {ourMenu3.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="blog-post blog-grid blog-rounded">
                <div className="dlab-post-media dlab-img-effect">
                  <Link to={"/Shoptwo"}>
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="dlab-info p-a25">
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link to={"/Shoptwo"}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {ourMenu4.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="blog-post blog-grid blog-rounded">
                <div className="dlab-post-media dlab-img-effect">
                  <Link to={"/Shoptwo"}>
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="dlab-info p-a25">
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link to={"/Shoptwo"}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {ourMenu5.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="blog-post blog-grid blog-rounded">
                <div className="dlab-post-media dlab-img-effect">
                  <Link to={"/Shoptwo"}>
                    <img src={item.image} alt="" />
                  </Link>
                </div>
                <div className="dlab-info p-a25">
                  <div className="dlab-post-title">
                    <h4 className="post-title">
                      <Link to={"/Shoptwo"}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Shoponline;
