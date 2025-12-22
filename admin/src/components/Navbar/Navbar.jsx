import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import logo4 from '../../assets/logo4.png';
import profile_img2 from '../../assets/profile_img2.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo4" src={logo4} alt="Logo" />
        <p className="admin-text">Admin Panel</p>
      </div>
      <img className="profile" src={profile_img2} alt="Profile" />
    </div>
  );
};

export default Navbar;
