import React from 'react'
import NavBar from './NavBar';
import Section from './Section';
import { FaAngleRight } from "react-icons/fa";
import './Welcome.css'
import { useForm } from "react-hook-form";
import app, { actionCodeSettings } from '../firebase';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../features/auth/authSlice';

const signInWithMail = (email) => {

}
function Welcome() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const onSubmit = ({email}) => {
        app.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem('emailForSignIn', email);
          dispatch(registerSuccess())
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    };
    return (
        <>
        <NavBar/>
        <div className="welcome"    style={{
            backgroundSize:'cover',
            backgroundImage:`url('https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/1125ab93-da0f-4fa8-917f-f6439020de6a/SN-en-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg')`,
            backgroundPosition:"center center"
        }}>
            <h1 className="welcome__title">Unlimited movies, TV shows, and more.</h1>
            <h3 className="welcome__sub__title">Watch anywhere. Cancel anytime.</h3>
            <p className="welcome__description">Ready to watch? Enter your email to create or restart your membership.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="welcome__form">
                <div className="welcome__input__content">
                    <input className="welcome__input" {...register("email", {required : true})} placeholder="Email Address"/>
                    <p>{errors.email && <span>An email address is required</span>}</p>
                </div>
                <div className="welcome__button__content">
                    <button className="welcome__button" type="submit">
                            Get Started <FaAngleRight className="fa__angle"/>
                    </button>
                </div>
            </form>
        </div>
        <Section title="Enjoy on your TV." description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
        <Section title="Download your shows to watch offline." description="Save your favorites easily and always have something to watch." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" reversed={true}/>
        <Section title="Watch everywhere." description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
        <Section title="Create profiles for kids." description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." image="https://occ-0-3276-2706.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" reversed={true}/>
        </>
    )
}

export default Welcome
