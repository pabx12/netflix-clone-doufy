import React, {useEffect, useState} from 'react'
import './NavBar.css'
import logo from '../netflix-logo.png';
import { useHistory } from "react-router-dom";
function NavBar() {
  const [show , handleShow] = useState(false)
  const isLogin = useState(false)
  let history = useHistory();
  const handleClick = () => {
    history.push("/login");
  }
  const handleClickHome = () => {
    history.push("/");
  }
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
                <img src={logo} className="nav__logo" alt="Logo" onClick={handleClickHome}/>
                {isLogin ? (<button onClick={handleClick} className="login__button">Se connecter</button>) : (<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" className="nav__avatar" alt="icon"/>)}
               
            </div>
        </div>
    )
}

export default NavBar
