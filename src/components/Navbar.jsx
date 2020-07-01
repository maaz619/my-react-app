import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="nav-bar">
            <nav>
                <div className="nav-bar-items">Home</div>
                <div className="nav-bar-items">About</div>
                <div className="nav-bar-items">Contact</div>
            </nav>
        </div>
    )
}
export default Navbar