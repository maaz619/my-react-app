import React, { Component } from "react";
import axios from "axios";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QuoteBox from "./QuoteBox"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "", loaded: false };
  }
  async componentDidMount() {
    const body = await axios.get("https://type.fit/api/quotes");
    this.thedata = body.data;
    setTimeout(() => {
        this.setState({
            quote: this.thedata[Math.floor(Math.random() * this.thedata.length)].text,
            loaded:true
          });
    }, 1000);
  }
  handleClick = async () => {
    this.setState({
      quote: this.thedata[Math.floor(Math.random() * this.thedata.length)].text,
    });
  };
  render() {
    return (
      <div className="container">
        <QuoteBox
          quote={this.state.quote}
          loaded={this.state.loaded}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
export default Home;
