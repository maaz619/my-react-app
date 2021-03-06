import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Router>
          <ToastContainer />
          <Navbar />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Redirect from="/" exact to="/home" />
            <Redirect from="/home" exact to="/home" />
            <Redirect from="/about" exact to="/about" />
            <Redirect from="/contact" exact to="/contact" />
            <Redirect from="/login" exact to="/login" />
            <Redirect from="/register" exact to="/register" />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
