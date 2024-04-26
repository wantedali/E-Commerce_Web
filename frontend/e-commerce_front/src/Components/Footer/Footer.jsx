import React from 'react';
import './footer.css';
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const footer = () =>{

    return (
        <div className="footer">
            <div className="footer-logo">
            <img src="footer-logo" alt="" />
            <p>Shopper</p>
            </div>
            <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="footer-copyright"></div>
                <hr>Copyright @ 2024 - All Right Reserved</hr>
            </div>
         </div>
    )

}
export default footer