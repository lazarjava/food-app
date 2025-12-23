import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      {/* Background Video */}
      <video 
        className="header-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Joyful food.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content 
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted 
          with the finest ingredients and culinary expertise. Our mission is to satisfy 
          your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>*/}
    </div>
  )
}

export default Header
