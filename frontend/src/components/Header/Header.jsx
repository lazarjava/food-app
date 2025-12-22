import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      
      {/* 🔥 Background Video */}
      <video 
        className="header-video"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: "brightness(1)" }}
      >
        <source src="/Joyful food.mp4" type="video/mp4" />
       {/* <source src="/video_bg.mp4" type="video/mp4" /> */}
        {/* If using online video, replace above line with: 
        <source src="https://videos.pexels.com/video-files/3182766/3182766-hd_1920_1080_25fps.mp4" type="video/mp4" /> */}
      </video>

      {/* Text Content 
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted 
          with the finest ingredients and culinary expertise.
        </p>
        <button>ViewMenu</button>
      </div>*/}

    </div>
  )
}

export default Header
