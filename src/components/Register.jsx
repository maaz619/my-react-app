import React, { Component } from "react";
import "./Register.css";
import { toast } from "react-toastify";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { first_name: "", last_name: "", email: "", password: "" };
  }

  handleChange = (e) => {
    const currentStatus = this.state;
    currentStatus[e.currentTarget.name] = e.currentTarget.value;
    this.setState(currentStatus);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.first_name !== "" &&
      this.state.last_name !== "" &&
      this.state.password.length > 7 &&
      this.state.email !== ""
    ) {
      toast.success("Submitted");
    } else {
      toast.error("Invalid Input");
    }
  };
  render() {
    return (
      <div className="register-container">
        <div className="form">
          <div className="hello">
            <h1>Register</h1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                onChange={this.handleChange}
                className="form-control"
                name="first_name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                onChange={this.handleChange}
                className="form-control"
                name="last_name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={this.handleChange}
                className="form-control"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
                className="form-control"
                name="password"
              />
            </div>
            <button className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
