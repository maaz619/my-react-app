import React,{Component} from "react";
import "./App.css"
import Home from "./components/home"

class App extends Component{
    render(){
        return(
            <div className="app">
                <Home />
            </div>
        )
    }
}
export default App;