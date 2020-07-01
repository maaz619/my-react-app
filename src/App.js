import React,{Component} from "react";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/Navbar"

class App extends Component{
    render(){
        return(
            <div className="app">
                <Navbar />
                <Home />
            </div>
        )
    }
}
export default App;