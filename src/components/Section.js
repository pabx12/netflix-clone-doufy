import React from 'react'
import './Section.css'
function Section({title, description, image, reversed=false}) {
    return (
        <div className="section">
            {reversed ? (<div className="section__content">
                <div className="section__image__content">
                    <img 
                        className="section__image"
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="section__text__content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>) : (<div className="section__content">
                <div className="section__text__content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="section__image__content">
                    <img 
                        className="section__image"
                        src={image}
                        alt={title}
                    />
                </div>

            </div>)}
        </div>
    )
}

export default Section
