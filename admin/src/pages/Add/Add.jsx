import React, { useEffect, useState } from 'react'

import "./Add.css"

import { assets } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {

  const url = "http://localhost:4000";

  const [imageData , setImage] = useState(false);

  const [data , setData] = useState({
    name: "",

    description: "",

    price: "",

    category: "Rice&Curry"
  });

  //========================================================== OnchangeHandler =======================================================

  const onChangeHandler = (event) => {

    const name = event.target.name;

    const value = event.target.value;

    setData(data => ({...data,[name]:value}));

  };

  //========================================================== ONSUBMITHANDLER FUNCTION =============================================

  const onSubmitHandler = async (event) => {

    event.preventDefault(); //page doesnt reload

    const formData = new FormData();

    formData.append("name" , data.name)

    formData.append("description" , data.description)

    formData.append("category" , data.category)

    formData.append("price" , Number(data.price))

    formData.append("image" , imageData)

    const response = await axios.post(`${url}/api/food/add` , formData);

    if(response.data.success){
      setData({
        name: "",

        description: "",

        price: "",

        category: "Rice&Curry"
      });

      setImage(false);

      toast.success(response.data.message)
    } 
    else
    {
      toast.error(response.data.message)
    }

  }

  return (
    
    <div className='add'>

      <form className='flex-col' onSubmit={onSubmitHandler}>

        <div className="add-image-upload flex-col">

          <p>Upload Image</p>

          <label htmlFor="image">

            <img src={imageData?URL.createObjectURL(imageData):assets.upload_area} alt=''/>

          </label>

          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" id="image" hidden required />

        </div>

        <div className="add-product-name flex-col">

          <p>product namme</p>

          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />

        </div>

        <div className="add-product-description flex-col">

          <p>Product Description</p>

          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write Content Here' required></textarea>

        </div>

        <div className="add-category-price">

          <div className="add-category flex-col">

            <p>Product Category</p>

            <select onChange={onChangeHandler} value={data.category} name="category">

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

            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='LKR 100'/>

          </div>

        </div>

        <button className='add-btn' type='submit'>Add</button>
        
      </form>

    </div>

  )

}

export default Add