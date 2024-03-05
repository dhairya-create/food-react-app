import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./images/swiggy.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UsernameContext from "../utils/UsernameContext";
const Header = () => {

  const onlineStatus = useOnlineStatus();
  const userName = useContext(UsernameContext)
  return (
    <div className="flex justify-between bg-green-100 shadow-lg mb-2">
      <div className="logo-container">
        {" "}
        <Link to={'/'}><img className="w-28 h-16 m-4" src={logo} alt="logo" /></Link>
        
      </div>

      <div className="flex items-center">
        <ul className="flex  p-4 m-4 ">
          <li className="px-4" >Online Status {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-4" ><Link to='/'>Home</Link></li>
            <li className="px-4" ><Link to='/grocery'>Grocery</Link></li>
            <li className="px-4" ><Link to='/about'>About Us</Link></li>
            <li className="px-4" ><Link to='/contact-us'>Contact Us</Link></li>
            <li className="px-4" >Cart</li>
            <li className="px-4 font-bold" >{userName.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
