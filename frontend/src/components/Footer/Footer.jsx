import React from 'react'

import './Footer.css'
import { assets } from '../../assets/assets'



const Footer = () => {
  return (
    <div className='footer' id='footer'>
        
      <div className="footer-content">

        <div className="footer-content-left">

          <img src={assets.logo}/>

          <p>Thank you for visiting our homemade food website, where we bring fresh, authentic, and delicious meals made with love. Explore our variety of dishes and experience the true taste of home in every bite.</p>

          <div className="footer-social-icon">

            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />

          </div>

        </div>

        <div className="footer-content-center">

          <h2>Company</h2>

          <ul>

            <li>Home</li>

            <li>About Us</li>

            <li>Delivery</li>

            <li>Privacy Policy</li>

          </ul>

        </div>

        <div className="footer-content-right">

          <h2>Get In Touch</h2>

          <ul>

          <li>+94750136869</li>
          <li>harishanth08@gmail.com </li>

          </ul>
          
        </div>

      </div>

      <hr />

      <p className="footer-copyright">Copyright 2024 &#169; Food&Cool.com - All Right Reserved</p>
    </div>
  )
}

export default Footer