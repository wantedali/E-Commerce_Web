import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [menu, setmenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>E-Shop</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setmenu("shop") }}><Link style={{ textDecoration: 'None' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Men") }}><Link style={{ textDecoration: 'None' }} to='/Men'>Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Women") }}><Link style={{ textDecoration: 'None' }} to='/Women'>Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Kids") }}><Link style={{ textDecoration: 'None' }} to='/Kids' >Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button className="but">Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
};

export default Navbar;