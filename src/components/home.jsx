import React, {Component} from "react";
import axios from "axios";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css"

class Home extends Component{
    constructor(props){
        super(props)
        this.state={quote:"LOADING........"}
    }
    async componentDidMount(){
        const body= await axios.get("https://type.fit/api/quotes");
        this.thedata=body.data
        this.setState({
            quote:this.thedata[Math.floor(Math.random()* this.thedata.length)].text
        })
    }
    handleClick= async () =>{
        this.setState({
            quote:this.thedata[Math.floor(Math.random()* this.thedata.length)].text
        })
    }
    render(){
        return(
        <div className="container">
            <div className="quote-box">
                <div className="quote-container">
                    <div className="quote-content">{this.state.quote}</div>
                </div>
                <div className="button-refresh">
                    <button className="btn btn-primary" onClick={this.handleClick}>GET NEW</button>
                </div>
            </div>
        </div>
        )
    }
}
export default Home;