import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./comoponent/Navbar";
import ProductList from "./comoponent/ProductList";
import Details from "./comoponent/Details";
import Cart from "./comoponent/Cart";
import Default from "./comoponent/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>

      </React.Fragment>
    );
  }
}
export default App;
