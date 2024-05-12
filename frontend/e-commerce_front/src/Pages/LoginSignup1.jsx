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
import { useState } from "react";
const LoginSignup1 = () => {
    const [state,setState] = useState("signup");
        // eslint-disable-next-line no-undef
        const [formData,setFormData] =useState({
            username:"",
            password:"",
            email:""
        })
        const changeHandler =(e)=>{
            setFormData({...formData,[e.target.name]:e.target.value})
        }
    const signup=async()=>{
        console.log("Signup Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
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
    

    return (
        <div className="old-sign-in">
            <div className="old-copyright-blabel">Copyright @Blabel | Privacy Policy</div>
            <div className="old-rectangle-parent">
                <div className="old-group-child"></div>
                <b className="old-e-shop-login">
                    <span>E-Shop</span>
                    <span className="old-login"> SignUp</span>
                </b>
                <div className="old-hide">Hide</div>
                <b className="old-already-have-an-container">
                    <span>Already have an account? </span>
                    <Link to='/Login'><span className="old-login-here">Login here</span></Link>
                </b>
                <div className="old-hey-enter-your">
                    Hey, Enter your details to get sign up to a new account
                </div>
                {state==="signup"?
                <div className="old-group-parent">
                    <input
                        className="old-frame-child"
                        name="username"
                        placeholder="Username"
                        type="text"
                        value={formData.username}
                        onChange={changeHandler}
                    />

                    <input
                        className="old-frame-item"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                    />

                    <input
                        className="old-frame-inner"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={formData.password}
                        onChange={changeHandler}
                    />
                </div>
:<></>}
                <button className="old-group-container">
                    <div className="old-rectangle-wrapper">
                        <div className="old-group-item"></div>
                    </div>
                    <div onClick={()=>{state==="signup"?signup():<></>}} className="old-continue">Continue</div>
                </button>
                <div className="old-our-social-pages-parent">
                    <b className="old-our-social-pages">Our Social pages </b>
                    <div className="old-group-inner"></div>
                    <div className="old-line-div"></div>
                </div>
                <div className="old-sso-login-parent">
                    <div className="old-sso-login">
                        <img className="old-sso-icon" alt="" src={sso_icon2x} />
                    </div>
                    <div className="old-sso-login">
                        <img className="old-sso-icon1" alt="" src={sso_icon} />
                    </div>
                    <div className="old-sso-login">
                        <img className="old-sso-icon" alt="" src={sso_icon12x} />
                    </div>
                    <div className="old-sso-login">
                        <img className="old-sso-icon1" alt="" src={sso_icon2} />
                    </div>
                </div>
            </div>
            <img
                className="old-shopping-package-icon"
                alt=""
                src={shopping_package2x}
            />

            <img
                className="old-shopping-cart-icon"
                alt=""
                src={shopping_cart2x}
            />

            <img
                className="old-shopping-bags-icon"
                alt=""
                src={shopping_bags2x}
            />

            <img
                className="old-shopping-basket-full-of-grocer"
                alt=""
                src={shopping_basket_full_of_groceries2x}
            />
        </div>
    )
}

export default LoginSignup1;
