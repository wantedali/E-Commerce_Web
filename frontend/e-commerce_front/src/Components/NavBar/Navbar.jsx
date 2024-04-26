import React, { useState } from "react";
import './Navbar.css';
import logo from './Assets/logo.png'
import cart_icon from './Assets/cart_icon.png'

const Navbar = () => {

    const [menu , setmenu] = useState("shop");

    return (
        <div className="navbar">
          <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>E-Shop</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setmenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button className="but">Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
};

export default Navbar;