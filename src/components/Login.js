import React from 'react'
import NavBar from './NavBar';
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import {Link} from 'react-router-dom'
import './Login.css';

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                        <h3 className="form__login__title">Se connecter</h3>
                   </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form__row">
                            <div className="form__group">
                            <input  {...register("email")} placeholder="Email or phone number"/>
                            </div>
                            <div className="form__group">
                            <input  {...register("password")} placeholder="Password"/>
                            </div>
                            <button className="btn_login">Se connecter</button>
                            <div className="form__bottom">
                                <span className="form__bottom_checkbox"><input type="checkbox" checked={true} id="sm"/>
                                &nbsp;<label htmlFor="sm">Se souvenir de moi</label>
                                </span>
                                <span>Besoin d'aide</span>
                            </div>
                            <div className="login__form__content__bottom">
                                <h3><FaFacebookF className="fb__icon"/> &nbsp; &nbsp;<span className="fb__label">Se connecter avec Facebook</span></h3>
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
