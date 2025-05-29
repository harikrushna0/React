import { HEADER_LOGO_URL } from "../utils/constant.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [loginbtn, setLogin] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => setLogin(loginbtn === "login" ? "logout" : "login")}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
