import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    const links=[
        {title: "Home", position: "left", to: "/home"},
        {title: "About", position: "left", to: "/about"},
        {title: "Contact", position: "left", to: "/contact"},
        {title: "Login", position: "right", to: "/login"},
        {title: "Register", position: "right", to: "/register"}
    ];
    const handleClick= (message) => {
        console.log(message)
    };
    return (
      <nav className="nav-bar">
        <div className="nav-bar-left">
          {links
            .filter((link) => link.position === "left")
            .map((link, i) => (
              <div
                className="nav-bar-items"
                key={i}
              >
                <Link className="link" to={link.to}  onClick={() => {
                  handleClick(link.title);
                }}>
                  {link.title}
                
                </Link>
              </div>
            ))}
        </div>
        <div className="nav-bar-right">
        {links
            .filter((link) => link.position === "right")
            .map((link, i) => (
              <div
                className="nav-bar-items"
                key={i}
              >
                <Link className="link" to={link.to} onClick={() => {
                  handleClick(link.title);
                }}>
                  {link.title}
                </Link>
              </div>
            ))}
        </div>
      </nav>
    );
}
export default Navbar;