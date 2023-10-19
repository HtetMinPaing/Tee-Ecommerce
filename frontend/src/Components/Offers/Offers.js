import React from 'react'
import "./Offers.css"
import exclusive_image from "D:/Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1 id='header-one'>Exclusive</h1>
            <h1 id='header-one'>Offers For you</h1>
            <p id='medium-text'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button id='medium-text'>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} alt='' />
        </div>
    </div>
  )
}

export default Offers