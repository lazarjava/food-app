import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import logo4 from "../../assets/logo4.png";
const Footer = () => {
    return (
        <div className='footer' id='contact-us'>
            <div className="footer-content">
                <div className="footer-content-left">
                 <img src={logo4} alt="Company Logo" className="logo4" />
                    <p>Joyful Food App brings happiness to every meal, delivering delicious dishes right to your doorstep. With just a tap, you can enjoy your favorite foods anytime, anywhere. Fresh, tasty, and fast, Joyful Food App turns every craving into a joyful experience</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>Abouts</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
