import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1 id='header-one'>Get Exclusive Offers On your Email</h1>
        <p id='small-text'>Subscribe to our newsletter and stay update</p>
        <div>
            <input id='small-text' type='email' placeholder='Your Email' />
            <button id='medium-text'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter