import React,{Component} from "react";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

class App extends Component{
    render(){
        return(
            <div className="app">
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default App;