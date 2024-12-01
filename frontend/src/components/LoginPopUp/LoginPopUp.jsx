import React, { useContext, useState } from 'react'

import './LoginPopUp.css'

import { assets } from '../../assets/assets';

import { StoreContext } from '../../Context/StoreContext';

import axios from 'axios';



const LoginPopUp = ({setShowLogin}) => {

    const {urlLocal} = useContext(StoreContext);

    const [currentState , setCurrentState] = useState('Sign In');

    const [data , setData] = useState({

      name:"",

      email:"",

      password:""

    });

    const onChangeHandler = (event) => {

      const name = event.target.name;

      const value = event.target.value;

      setData(previesData => ({...previesData, [name]: value}));
    };

    const onLogin = async(event) => {

      event.preventDefault();

      let newUrl = urlLocal;

      if(currentState === "Sign In")
      {
        newUrl += "/api/user/login";
      }
      else
      {
        newUrl =+ "/api/user/register";
      }

      const response = await axios.post(newUrl , data);

      if(response.data.success)
      {
        
      }

    }

  return (

    <div className='login-popup'>

     <form className="login-popup-container" onSubmit={onLogin}>

        <div className="login-popup-title">

            <h2>{currentState}</h2>

            <img onClick={ () => setShowLogin(prev => prev ? false : true)} src={assets.cross_icon} alt="" />

        </div>

        <div className="login-popup-input">

            {currentState === "Sign In" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}

            <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Your Email' required />

            <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required />

        </div>

        <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Sign In"}</button>

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