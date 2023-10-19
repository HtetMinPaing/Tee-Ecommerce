import React from 'react'
import "./Footer.css"
import footer_logo from "D:/Assets/logo_big.png"
import instagram_icon from "D:/Assets/instagram_icon.png"
import pintester_icon from "D:/Assets/pintester_icon.png"
import whatsapp_logo from "D:/Assets/whatsapp_icon.png"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='' />
            <p id='header'>Tee's shop</p>
        </div>
        <ul className='footer-links'>
            <li id='medium-text'>Company</li>
            <li id='medium-text'>Products</li>
            <li id='medium-text'>Offices</li>
            <li id='medium-text'>About</li>
            <li id='medium-text'>Contact</li>
        </ul>
        <div className='footer-social'>
            <div className='footer-icon'>
                <img src={instagram_icon} alt=''/>
            </div>
            <div className='footer-icon'>
                <img src={pintester_icon} alt=''/>
            </div>
            <div className='footer-icon'>
                <img src={whatsapp_logo} alt=''/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p id='small-text'>Copyright @ 2023 - All Right Reserve</p>
        </div>
    </div>
  )
}

export default Footer