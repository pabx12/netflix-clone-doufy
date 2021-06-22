import React, {useEffect, useState} from 'react'
import './NavBar.css'
import logo from '../netflix-logo.png';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectIsLogin, selectUser } from '../features/auth/authSlice';
function NavBar({handleLogOut}) {
  const [show , handleShow] = useState(false)
  const [toggleDrop , setToggleDrop] = useState(true)
  const isLogin = useSelector(selectIsLogin)
  const user = useSelector(selectUser)
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
  const handleDrop = () => {
    setToggleDrop(!toggleDrop)
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
                {isLogin ?(<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" className="nav__avatar" alt="icon"  onClick={handleDrop}/>) : (<button onClick={handleClick} className="login__button">Sign In</button>)}
               
            </div>
            <div className={`dropdown ${toggleDrop ? " dropdown__hide" : ""} `}>
               <div className="dropdown__item">
                    <p>Daouda</p>
                    <p onClick={handleLogOut}>Logout</p>
               </div>
            </div>
        </div>
    )
}

export default NavBar
