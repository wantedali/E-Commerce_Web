import React from "react";
import sso_icon2x from '../Components/Assets/sso-icon@2x.png'
import sso_icon2 from '../Components/Assets/sso-icon2.svg'
import sso_icon12x from '../Components/Assets/sso-icon1@2x.png'
import sso_icon from '../Components/Assets/sso-icon.svg'
import shopping_package2x from '../Components/Assets/shopping-package@2x.png'
import shopping_cart2x from '../Components/Assets/shopping-cart@2x.png'
import shopping_bags2x from '../Components/Assets/shopping-bags@2x.png'
import shopping_basket_full_of_groceries2x from '../Components/Assets/shopping-basket-full-of-groceries@2x.png'
import { Link } from 'react-router-dom';
import './CSS/LoginSignup1.css'

const LoginSignup1 = () => {
    return (
        <div class="sign-in">
            <div class="copyright-blabel">Copyright @Blabel | Privacy Policy</div>
            <div class="rectangle-parent">
                <div class="group-child"></div>
                <b class="e-shop-login">
                    <span>E-Shop</span>
                    <span class="login"> SignUp</span>
                </b>
                <div class="hide">Hide</div>
                <b class="already-have-an-container">
                    <span>Already have an account? </span>
                  <Link to='/Login'><span class="login-here">Login here</span></Link>
                </b>
                <div class="hey-enter-your">
                    Hey, Enter your details to get sign up to a new account
                </div>
                <div class="group-parent">
                    <input
                        class="frame-child"
                        name="username"
                        placeholder="Username"
                        type="text"
                    />

                    <input
                        class="frame-item"
                        name="Email"
                        placeholder="Email"
                        type="email"
                    />

                    <input
                        class="frame-inner"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                </div>
                <button class="group-container">
                    <div class="rectangle-wrapper">
                        <div class="group-item"></div>
                    </div>
                    <div class="continue">Continue</div>
                </button>
                <div class="our-social-pages-parent">
                    <b class="our-social-pages">Our Social pages </b>
                    <div class="group-inner"></div>
                    <div class="line-div"></div>
                </div>
                <div class="sso-login-parent">
                    <div class="sso-login">
                        <img class="sso-icon" alt="" src={sso_icon2x} />
                    </div>
                    <div class="sso-login">
                        <img class="sso-icon1" alt="" src={sso_icon} />
                    </div>
                    <div class="sso-login">
                        <img class="sso-icon" alt="" src={sso_icon12x} />
                    </div>
                    <div class="sso-login">
                        <img class="sso-icon1" alt="" src={sso_icon2} />
                    </div>
                </div>
            </div>
            <img
                class="shopping-package-icon"
                alt=""
                src={shopping_package2x}
            />

            <img
                class="shopping-cart-icon"
                alt=""
                src={shopping_cart2x}
            />

            <img
                class="shopping-bags-icon"
                alt=""
                src={shopping_bags2x}
            />

            <img
                class="shopping-basket-full-of-grocer"
                alt=""
                src={shopping_basket_full_of_groceries2x}
            />
        </div>
    )
}

export default LoginSignup1;