import React from 'react'
import "./Item.css"

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt='' />
        <p id='small-text'>{props.name}</p>
        <div className='item-prices'>
            <div id='small-text' className='new-price'>
                $ {props.new_price}
            </div>
            <div id='small-text' className='old-price'>
                $ {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item