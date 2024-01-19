import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";



const teamInfo = [
  {
    image: require("./../../images/products/team/member4.jpg"),
    name: "Joey",
    post: "Mangaer",
  },
  {
    image: require("./../../images/products/team/member2.jpg"),
    name: "Raymond",
    post: "Supervisor",
  },
  {
    image: require("./../../images/products/team/member3.jpg"),
    name: "Cloey",
    post: "Chef",
  },
  {
    image: require("./../../images/products/team/member1.jpg"),
    name: "James",
    post: "Master Chef",
  },
];

class About extends Component {
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
                      <h3>
                        Welcome to Solz Bakery - Where Every Bite Tells a
                        Delicious Tale!{" "}
                      </h3>
                      <p>
                        At Solz Bakery, we believe in the power of creating
                        memorable moments through the art of baking. Our story
                        is one of passion, flavor, and a commitment to
                        delivering unparalleled delight to your taste buds.
                        <h3>Our Journey</h3>
                        Founded in 1990, Solz Bakery has been a labor of love,
                        inspired by the simple joy of sharing freshly baked
                        goodness. From the heart of our kitchen to your table,
                        every creation is a testament to our dedication to
                        quality, authenticity, and the sheer pleasure that comes
                        with a delectable treat.
                        <h3>What Sets Us Apart</h3>-{" "}
                        <strong>Artisanal Craftsmanship:</strong> Each item on
                        our menu is a masterpiece, crafted with precision and
                        care by our skilled bakers.
                        <br />- <strong>Freshness Guaranteed:</strong> We take
                        pride in serving you only the freshest, high-quality
                        ingredients, ensuring a delightful experience with every
                        bite.
                        <br />- <strong>Tailored Elegance:</strong> Whether it's
                        a custom cake for a special celebration or a daily
                        indulgence, we believe in tailoring our offerings to
                        suit your unique preferences.
                        <h3>Our Menu:</h3>
                        Explore a symphony of flavors with our diverse menu,
                        featuring everything from artisan bread and pastries to
                        exquisite cakes and desserts. Solz Bakery is your go-to
                        destination for a delightful array of sweet and savory
                        treats.
                        <h3>Community Matters:</h3>
                        At Solz Bakery, we cherish our community. Beyond the
                        kitchen, we are committed to giving back and fostering
                        connections. Join us in creating a place where everyone
                        feels welcomed, and where the aroma of fresh baked goods
                        brings people together.
                        <h3>Visit Us:</h3>
                        Step into our bakery and experience the warmth of our
                        ovens and the richness of our creations. Whether you're
                        picking up a morning pastry or planning a grand
                        celebration, Solz Bakery is here to make every moment
                        special. Thank you for being a part of our story. We
                        look forward to serving you a slice of happiness at Solz
                        Bakery! Indulge. Savor. Celebrate. Solz Bakery -
                        Crafting Sweet Memories, One Bite at a Time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-full content-inner-1 bg-white">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head text-center">
                      <h3>Our Expert Chefs</h3>
                      <p>Meet our professional team meambers</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {teamInfo.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                      <div className="dlab-team1" key={index}>
                        <div className="thumb">
                          <img src={item.image} alt="" />
                          <ul className="social-link">
                            <li>
                              <Link to={""}>
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to={""}>
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="team-info text-center">
                          <h4 className="name">{item.name}</h4>
                          <p className="position">{item.post}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default About;
