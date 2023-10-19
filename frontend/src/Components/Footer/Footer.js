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
            <p>Tee's shop</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
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
            <p>Copyright @ 2023 - All Right Reserve</p>
        </div>
    </div>
  )
}

export default Footer