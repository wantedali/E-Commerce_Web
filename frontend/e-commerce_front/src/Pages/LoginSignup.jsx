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
import './CSS/LoginSignup.css'
import { useState } from "react";
const LoginSignup = () => {
    const [state,setState] = useState("login");
    // eslint-disable-next-line no-undef
    const [formData,setFormData] =useState({
        username:"",
        password:"",
        email:""
    })
    const [errors, setErrors] = useState({});
    const changeHandler =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
        setErrors({ ...errors, [e.target.name]: '' }); // Clear previous errors
    }
    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.email) {
            errors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email address";
            isValid = false;
        }

        if (!formData.password) {
            errors.password = "Password is required";
            isValid = false;
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };
    const login=async()=>{
        if(validateForm()){
        console.log("Login Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData = data);
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }else{
           alert(responseData.errors); 
        }
    }
    }
    return (
        <div class="sign-in">
            <div class="copyright-blabel">Copyright @Blabel | Privacy Policy</div>
            <div class="rectangle-parent">
                <div class="group-child"></div>
                <b class="e-shop-login">
                    <span>E-Shop</span>
                    <span class="login"> Login</span>
                </b>
                <div class="hide">Hide</div>
                <b class="already-have-an-container">
                    <span>Don't have an account? </span>
                    <Link to='/login-here'><span class="login-here">SignUp here</span></Link>
                </b>
                <div class="hey-enter-your">
                    Hey, Enter your details to Login to your account
                </div>
            
                <div class="group-parent">
                   
                    <input
                        class="frame-item"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                    <input
                        class="frame-inner"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={formData.password}
                        onChange={changeHandler}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
                
                <button class="group-container" onClick={login}>
                    <div class="rectangle-wrapper">
                        <div class="group-item"></div>
                    </div>
                    <div  class="continue">Continue</div>
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

export default LoginSignup;