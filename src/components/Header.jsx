import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/swiggy.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {" "}
        <Link to={'/'}><img className="logo" src={logo} alt="logo" /></Link>
        
      </div>

      <div className="nav-items">
        <ul>
        
            <li><Link style={{textDecoration:"none"}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration:"none"}} to='/about'>About Us</Link></li>
            <li><Link style={{textDecoration:"none"}} to='/contact-us'>Contact Us</Link></li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
