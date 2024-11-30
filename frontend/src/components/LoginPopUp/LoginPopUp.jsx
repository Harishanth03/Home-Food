import React, { useState } from 'react'

import './LoginPopUp.css'

import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin}) => {

    const [currentState , setCurrentState] = useState('Sign Up');

    const [data , setData] = useState({

      name:"",

      email:"",

      password:""

    })

  return (

    <div className='login-popup'>

     <form className="login-popup-container">

        <div className="login-popup-title">

            <h2>{currentState}</h2>

            <img onClick={ () => setShowLogin(prev => prev ? false : true)} src={assets.cross_icon} alt="" />

        </div>

        <div className="login-popup-input">

            {currentState === "Sign In" ? <></> : <input type="text" placeholder='Your Name' required />}

            <input type="text" placeholder='Your Email' required />

            <input type="password" placeholder='Password' required />

        </div>

        <button>{currentState === "Sign Up" ? "Create Account" : "Sign In"}</button>

        {currentState === "Sign Up" ? <div className="login-popup-condition">

          <input type="checkbox" required />

          <p>By Continuing, i agree to the terms of use & Privacy Policy</p>

          </div> : <></>
        }

        {currentState === "Sign In" ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> :  <p>Already have an account? <span onClick={() => setCurrentState("Sign In")}>Sign In</span></p>}

     </form>

    </div>

  )

}

export default LoginPopUp