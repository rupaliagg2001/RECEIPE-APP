import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__left">
                <Link to="/">Logo</Link>
            </div>
            <div className="nav__right">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
