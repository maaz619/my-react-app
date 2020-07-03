import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
            <nav className="nav-bar">
                <div className="nav-bar-left">
                    <div className="nav-bar-items">
                        <Link className="link" to="/home">Home</Link>
                    </div>
                    <div className="nav-bar-items">
                        <Link className="link" to="/about">About</Link>
                    </div>
                    <div className="nav-bar-items">
                        <Link className="link" to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="nav-bar-right">
                    <div className="nav-bar-items">
                        <Link className="link" to="/login">Login</Link>
                    </div>
                    <div className="nav-bar-items">
                        <Link className="link" to="/register">Register</Link>
                    </div>
                </div>
            </nav>
    )
}
export default Navbar;