import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer'id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img  src={assets.logo} alt="" />
        <p> With our website we connect customers with restaurants, allowing users to search for, order food from, and read reviews of various eateries, ultimately facilitating a convinient and informed dining experience. 
          We partner with a wide network of restaurants, cafes, and eateries, listing their menus, prices, location details etc. </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <ul>
            <h2>COMPANY</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
           
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 1234567890</li>
                <li>aishwary@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'> Copyright 2025 @ aishwary.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer
