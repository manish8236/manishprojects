import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel.js"
import Carousel from 'react-bootstrap/Carousel'

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
class App extends Component {
  render() {
    return (
      <React.Fragment>

          <Navbar />
      <Carousel>
    <Carousel.Item>
      <img className= "carouselcustom"
        src={require('./images/oneplus.jpg')}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img className="carouselcustom"
      src={require('./images/pixel3.jpg')}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img className="carouselcustom"
      src={require('./images/samsung.jpeg')}
        alt="Third slide"
      />
    </Carousel.Item>
    </Carousel>


        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
