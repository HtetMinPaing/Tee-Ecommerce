import React from 'react'
import "./Hero.css"
import hand_icon from "D:/Assets/hand_icon.png"
import arrow_icon from "D:/Assets/arrow.png"
import hero_image from "D:/Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2 id='medium-text'>New Arrival Only</h2>
            <div className='hand-icon'>
                <p id='header-one'>new</p>
                <img src={hand_icon} alt='' />
            </div>
            <p id='header-one'>Collections</p>
            <p id='header-one'>For Everyone</p>
            <div className='latest-collection'>
                <div id='medium-text'>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt='' />
        </div>
    </div>
  )
}

export default Hero