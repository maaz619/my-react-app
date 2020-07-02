import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(
            <nav className="nav-bar">
                <div className="nav-bar-left">
                    <div className="nav-bar-items">Home</div>
                    <div className="nav-bar-items">About</div>
                    <div className="nav-bar-items">Contact</div>
                </div>
                <div className="nav-bar-right">
                    <div className="nav-bar-items">Login</div>
                </div>
            </nav>
    )
}
export default Navbar