import React, { useContext } from 'react'

import './Cart.css'

import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {

  const {food_list , cartItem ,removeFromCart} = useContext(StoreContext);

  return (

    <div>

      

    </div>

  )

}

export default Cart