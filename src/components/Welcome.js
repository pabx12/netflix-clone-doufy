import React from 'react'
import NavBar from './NavBar';
import Section from './Section';
import { FaAngleRight } from "react-icons/fa";
import './Welcome.css'
function Welcome() {
    return (
        <>
        <NavBar/>
        <div className="welcome">
            <h1 className="welcome__title">Unlimited movies, TV shows, and more.</h1>
            <h3 className="welcome__sub__title">Watch anywhere. Cancel anytime.</h3>
            <p className="welcome__description">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="welcome__form">
                <div className="welcome__input__content">

                    <input className="welcome__input" placeholder="Email Address"/>
                </div>
                <div className="welcome__button__content">
                    <button className="welcome__button">
                        <span>
                            Get Started
                        </span> 
                        <span className="span__icon">
                        <FaAngleRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <Section title="Enjoy on your TV." description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
        <Section title="Download your shows to watch offline." description="Save your favorites easily and always have something to watch." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" reversed={true}/>
        <Section title="Watch everywhere." description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
        <Section title="Create profiles for kids." description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." image="https://occ-0-3276-2706.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" reversed={true}/>
        </>
    )
}

export default Welcome
