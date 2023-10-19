import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const style = {textDecoration: "none", color: "#626262"}

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='' />
            <p id='header'>TeeMerce</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("shop")}><Link id='text' className="li" to="/">Shop</Link>{ menu==="shop" ?<hr/>:null}</li>
            <li onClick={()=>setMenu("men")}><Link id='text' className="li" to="/men">Men</Link>{ menu==="men" ?<hr/>:null}</li>
            <li onClick={()=>setMenu("women")}><Link id='text' className="li" to="/women">Women</Link>{ menu==="women" ?<hr/>:null}</li>
            <li onClick={()=>setMenu("kids")}><Link id='text' className="li" to="/kids">Kids</Link>{ menu==="kids" ?<hr/>:null}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link style={style} to="/login"><button id='medium-text'>Login</button></Link>
            <Link style={style} to="/cart" ><img src={cart_icon} alt='' /></Link>
            <div id='small-text' className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar