import React from 'react'

import './FoodItems.css'

import {assets} from '../../assets/assets'

const FoodItem = ({id , name , price , description , image}) => {

  return (

    <div className='food-item'>

      <div className="food-item-img-container">

        <img className='food-item-image' src={image}alt="" srcset="" />
        
      </div>

      <div className="food-item-info">

        <div className="food-item-name-raring">

          <p>{name}</p>

          <img src={assets.rating_starts} alt="" />

        </div>

        <p className="food-item-desc">{description}</p>

        <p className="food-item-price">LKR{price}</p>
      </div>
        
    </div>

  )

}

export default FoodItem