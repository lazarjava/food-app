import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import logo4 from "../../assets/logo4.png";
const Footer = () => {
  return (
    
    <div className='footer' id='footer'>  
        <div className="footer-content">  
            <div className="footer-content-left">  
              <img src={logo4} alt="Company Logo" className="logo4" />
                <p>Joyful Food App delivers fresh, tasty meals right to your doorstep.
Enjoy your favorite foods anytime, turning every craving into joy.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    </div> 
            </div>   
            <div className="footer-content-center">  
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>  
            <div className="footer-content-right">  
            <h2> GET IN TOUCH</h2>
            <ul>
                <li>+91-1234-5678</li>
                <li>contact@tomato.com</li>
            </ul>
            </div>  
        </div>  
        <hr/>
        <p className="footer-copyright">Copyright 2024  © Tomato.com - All Right Reserved.</p>
    </div>  
   
  )
}

export default Footer