import React, { Component } from "react";
import "./Login.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={email:"",password:""}
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        if(this.state.email!==""&&this.state.password!==""&&this.state.password.length >7)
            console.log(this.state)
        else console.log("Invalid Inputs")
    };
    handleChange = (e) => {
        let CurrentStatus=this.state;
        CurrentStatus[e.currentTarget.name]=e.currentTarget.value;
        this.setState(CurrentStatus)
    }
    render (){
        return (
            <div className="login-container">
                <div className="form">
                    <div className="header">
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input onChange={this.handleChange} type="email" className="form-control" id="email" name="email"/> 
                        </div>  
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={this.handleChange} type="password" id="password" name="password" className="form-control"/> 
                        </div>   
                        <button className="btn btn-primary">Login</button>               
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;