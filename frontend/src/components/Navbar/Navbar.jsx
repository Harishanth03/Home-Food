import React, { useContext, useState } from 'react'

import './Navbar.css'

import {assets} from "../../assets/assets.js";

import { Link, useNavigate } from 'react-router-dom';

import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => { //set show login is appear that why when user click the signin the setshow login became true

  const [menu , setMenu] = useState("home"); // set UseState for menu click and default underline is home

  const {getTotalCartAmount , token , setToken} = useContext(StoreContext);

  //Logout code====================================================================================================================

  const navigate = useNavigate();

  const logOut = () => {

    localStorage.removeItem("token");
    
    setToken("");

    navigate('/');

  }

  

  return (

    <div className='navbar'>

      <Link to='/'><img src={assets.logo} className='logo'/></Link>

      <ul className="navbar-menu">

        <Link to='/' className={menu === "home" ? "active" : "" } onClick={() => setMenu("home")}>home</Link>

        <a href='#explore-menu' className={menu === "menu" ? "active" : "" } onClick={ () => setMenu("menu")}>menu</a>

        <a href='#app-download' className={menu === "mobile-app" ? "active" : ""} onClick={ () => setMenu("mobile-app")}>mobile-app</a>

        <a href='#footer' className={menu === "contact-us" ? "active" : ""} onClick={ () => setMenu("contact-us")}>Contact us</a>


      </ul>

      <div className="navbar-right">

        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon">

          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>

          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>

        </div>

        {/* Set User icon after the user created account */}

        {!token ? <button onClick={() => setShowLogin(true)}>Sign in</button> :

        <div className='navbar-profile'> 

          <img src={assets.profile_icon} alt="" />

          <ul className="nav-profile-dropdown">

            <li > <img src={assets.bag_icon} alt="" /> <p>Order</p> </li>

            <hr />

            <li onClick={logOut}> <img src={assets.logout_icon} alt="" /> <p>Logout</p> </li>

          </ul>

        </div>}

        

      </div>

    </div>
    

  )

}

export default Navbar