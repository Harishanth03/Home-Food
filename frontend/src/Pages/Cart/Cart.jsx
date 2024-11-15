import React, { useContext } from 'react'

import './Cart.css'

import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {food_list , cartItem ,removeFromCart , getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

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

        {food_list.map((items , index) => {

          if(cartItem[items._id] > 0)
          {

            return (

              <div>

                <div className="cart-items-title cart-items-items">

                  <img src={items.image} alt="" />

                  <p>{items.name}</p>

                  <p>Rs.{items.price}</p>

                  <p>{cartItem[items._id]}</p>

                  <p>{items.price * cartItem[items._id]}</p>

                  <p className='cross' onClick={() => removeFromCart(items._id)}>x</p>

                </div>

                <hr />

              </div>

            )

          }

        })}

      </div>

      <div className="cart-bottom">

        <div className="cart-total">

          <h2>Cart Total</h2>

          <div>

            <div className="cart-total-details">

              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>

            </div>

            <hr />

            <div className="cart-total-details">

              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 200}</p>

            </div>

            <hr />

            <div className="cart-total-details">

              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 200}</b>

            </div>

          </div>

          <button onClick={() => navigate("/Order")}>PROCEED TO CHECKOUT</button>

        </div>

        <div className="cart-promo-code">

          <div>

            <p>If you have a promote code enter it here</p>

            <div className="cart-promo-code-input">

              <input type="text" placeholder='Promocode' />

              <button>Submit</button>
              
            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Cart