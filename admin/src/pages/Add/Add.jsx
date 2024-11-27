import React, { useState } from 'react'

import "./Add.css"

import { assets } from '../../assets/assets'

const Add = () => {

  const [imageData , setImage] = useState(false);

  return (
    
    <div className='add'>

      <form className='flex-col'>

        <div className="add-image-upload flex-col">

          <p>Upload Image</p>

          <label htmlFor="image">

            <img src={imageData?URL.createObjectURL(imageData)  :assets.upload_area} alt=''/>

          </label>

          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="image" hidden required />

        </div>

        <div className="add-product-name flex-col">

          <p>product namme</p>

          <input type="text" name='name' placeholder='Type here' />

        </div>

        <div className="add-product-description flex-col">

          <p>Product Description</p>

          <textarea name="description" rows="6" placeholder='Write Content Here' required></textarea>

        </div>

        <div className="add-category-price">

          <div className="add-category flex-col">

            <p>Product Category</p>

            <select name="category" >

              <option value="Rice&Curry">Rice&Curry</option>
              <option value="Kiri Bath">Kiri Bath</option>
              <option value="Noodles">Noodles</option>
              <option value="Dosa">Dosa</option>
              <option value="Hoppers">Hoppers</option>
              <option value="Idly">Idly</option>
              <option value="String Hoppers">String Hoppers</option>
              <option value="Kottu">Kottu</option>

            </select>

          </div>

          <div className="add-price flex-col">

            <p>Product Price</p>

            <input type="number" name='price' placeholder='LKR 100'/>

          </div>

        </div>

        <button className='add-btn' type='submit'>Add</button>
        
      </form>

    </div>

  )

}

export default Add