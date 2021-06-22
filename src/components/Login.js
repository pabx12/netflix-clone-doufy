import React from 'react'
import NavBar from './NavBar';
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import {Link} from 'react-router-dom'
import './Login.css';
import { useDispatch } from 'react-redux';
import { registerAsync } from '../features/auth/authSlice';


function Login({emailError, passwordError, handleLogin, handleSignUp, hasAccount}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const dispatch = useDispatch()
    const onSubmit = ({email, password}) => {
        handleLogin(email, password)
    };
    return (
        <>
        <NavBar/>
        <div className="login__form__content" 
        style={{
            backgroundSize:'cover',
            backgroundImage:`url('https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/1125ab93-da0f-4fa8-917f-f6439020de6a/SN-en-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg')`,
            backgroundPosition:"center center"
        }}
        >
                <div className="login___form">
                   <div className="form__login__title__content">
                        <h3 className="form__login__title">Sign In</h3>
                   </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__row">
                            <div className="form__group">
                            <input  {...register("email",  { required: true })} placeholder="Email or phone number"/>
                            </div>
                            <div>
                            <p className="has__error">{errors.email && <span>Please enter a valid email or phone number.</span>}</p>
                            <p className="has__error">{emailError && <span>{emailError}</span>}</p>
                            </div>
                            <div className="form__group">
                            <input  {...register("password",  { required: true })} placeholder="Password"/>
                            </div>
                            <div>
                                <p className="has__error">{errors.password && <span>Your password must contain between 4 and 60 characters.</span>}</p>
                                <p className="has__error">{passwordError && <span>{passwordError}</span>}</p>
                            </div>
                            <button onClick={onSubmit} className="btn_login">Sign In</button>
                            <div className="form__bottom">
                                <span className="form__bottom_checkbox"><input type="checkbox" checked={true} id="sm"/>
                                &nbsp;<label htmlFor="sm">Remember me</label>
                                </span>
                                <span>Need help ?</span>
                            </div>
                            <div className="login__form__content__bottom">
                                <h3><FaFacebookF className="fb__icon"/>  &nbsp;<span className="fb__label">
                                       Login with Facebook
                                    </span></h3>
                                <p className="register__text">New to Netflix? <Link to="/regiter" className="register__link">Sign up now.</Link></p>
                                <p className="recapcha">This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="#">Learn more.</Link> </p>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
        </>
    )
}

export default Login
