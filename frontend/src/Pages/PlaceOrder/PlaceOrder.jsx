import React, { useContext, useState } from 'react'

import './PlaceOrder.css'

import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';

const PlaceOrder = () => {

  const {getTotalCartAmount , token, food_list , cartItem , urlLocal } = useContext(StoreContext);

  const [placeOrderData , setPlaceOrderData] = useState({

    firstName : "",
    lastName: "",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""
  });

  const onchangeHandler = (event) => {

    const name  = event.target.name;
    const value = event.target.value;

    setPlaceOrderData(placeOrderData => ({...placeOrderData , [name]:value}));

  }

  const placeOrder = async(event) => {

    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {

      if(cartItem[item._id] > 0)
      {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo)
      }
    })

    let orderData = {

      address:placeOrderData,
      items:orderItems,
      amount:getTotalCartAmount() + 2
    }

    let response = await axios.post(urlLocal + "/api/order/place" , orderData , {headers:{token}});

    if(response.data.success)
    {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else
    {
      alert("Error");
    }

  }

  return (
    
    <form onSubmit={placeOrder} className='place-order'>

      <div className="place-order-left">

        <p className="title">Delivery Information</p>

        <div className="multi-fields">

          <input onChange={onchangeHandler} value={placeOrderData.firstName} name='firstName' type="text"  placeholder='First Name' required/>
          <input onChange={onchangeHandler} value={placeOrderData.lastName} name='lastName' type="text" placeholder='Last Name'  required/>

        </div>

        <input onChange={onchangeHandler} name='email' value={placeOrderData.email} type="email" placeholder='Email Address' required/>
        <input onChange={onchangeHandler} name='street' value={placeOrderData.street} type="text" placeholder='Street' required/>

        <div className="multi-fields">

          <input onChange={onchangeHandler} name='city' value={placeOrderData.city} type="text"  placeholder='City' required/>
          <input onChange={onchangeHandler} name='state' value={placeOrderData.state} type="text" placeholder='State'  required/>

        </div>

        <div className="multi-fields">

          <input onChange={onchangeHandler} name='zipCode' value={placeOrderData.zipCode} type="text"  placeholder='Zip-Code' required/>
          <input onChange={onchangeHandler} name='country' value={placeOrderData.country} type="text" placeholder='Country'  required/>

        </div>

        <input onChange={onchangeHandler} name='phone' value={placeOrderData.phone} type="text" placeholder='Phone' required/>

      </div>

      <div className="place-order-right">

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

          <button type='submit'>PROCEED TO PAYMENT</button>

        </div>

      </div>
      
    </form>

  )
}

export default PlaceOrder