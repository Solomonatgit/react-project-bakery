import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index1 from "./Pages/Index1";
import About from "./Pages/About";
import Ourservices from "./Pages/Ourservices";
import Booking from "./Pages/Booking";
import Shop from "./Pages/Shop";
import Shopone from "./Pages/Shopone";
import Shoptwo from "./Pages/Shoptwo";
import Shopthree from "./Pages/Shopthree";
import Shoponline from "./Pages/Shoponline";
import Shopproduct from "./Pages/Shopproduct";
import Contact from "./Pages/Contact";

class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/react">
        <Switch>
          <Route path="/" exact component={Index1} />

          <Route path="/about-1" exact component={About} />
          <Route path="/our-services" exact component={Ourservices} />

          <Route path="/booking" exact component={Booking} />

          <Route path="/shop" exact component={Shop} />
          <Route path="/shopone" exact component={Shopone} />
          <Route path="/shoptwo" exact component={Shoptwo} />
          <Route path="/shopthree" exact component={Shopthree} />
          <Route path="/shoponline" exact component={Shoponline} />

          <Route path="/shop-product-details" exact component={Shopproduct} />

          <Route path="/contact-1" exact component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
