import React, { useContext } from 'react'

import './Cart.css'

import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {

  const {food_list , cartItem ,removeFromCart} = useContext(StoreContext);

  return (

    <div className='cart'>

      <div className="cart-items">

        <div className="cart-items-title">

          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>

        <br />

        <hr />

      </div>

    </div>

  )

}

export default Cart