import React, {useEffect, useState} from 'react'
import './NavBar.css'
import logo from '../netflix-logo.png';
function NavBar() {
  const [show , handleShow] = useState(false)
  const transitionNav = () => {
    if(window.scrollY > 100){
      handleShow(true)
    }
    else{
      handleShow(false)
    }
  }
  useEffect(() => {
     window.addEventListener("scroll", transitionNav)
      return () => {
          window.removeEventListener("scroll", transitionNav)
      }
  }, [])
    return (
        <div className={`nav ${show ? " nav__black" : ""} `}>
            <div className="nav__content">
                <img src={logo} className="nav__logo" alt="Logo"/>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" className="nav__avatar" alt="icon"/>
            </div>
        </div>
    )
}

export default NavBar
