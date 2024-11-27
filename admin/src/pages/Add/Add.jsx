import React, { useState } from 'react'

import "./Add.css"
import { assets } from '../../assets/assets'
import axios from 'axios';

const Add = () => {

  const URL = "http://localhost:4000";

  const [ image , setImage ] = useState(false);

  const [data , setData] = useState(
    
    {
      name: "",

      description: "",

      price: "",

      category: "Dosa"

    }

  );

  const onchangeHandler = (event) => {

    const name = event.target.name;

    const value = event.target.value;

    setData(data => ({...data , [name] : value}));

  };

  //======================================================== API CALL ==============================================================
  const onSubmitHandler = async (event) => {

    event.preventDefault();

    const formData = new FormData();

    formData.append("name" , data.name);

    formData.append("description" , data.description);

    formData.append("price" , Number(data.price));

    formData.append("category" , data.category);

    formData.append("image" , image);

    const response = await axios.post(`${URL}/api/food/add` , formData);

    if(response.data.success)
    {
      setData(
        {
          name: "",
    
          description: "",
    
          price: "",
    
          category: "Dosa"
    
        }
      );

      setImage(false);
    }
    else
    {

    }
   
  }

  return (
    
    <div className='add'>

      <form className='flex-col' onSubmit={onSubmitHandler}>

        <div className="add-image-upload flex-col">

          <p>Upload Image</p>

          <label htmlFor="image">

            <img src={image ? URL.createObjectURL(image) : assets.upload_area}/>

          </label>

          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="image" hidden required />

        </div>

        <div className="add-product-name flex-col">

          <p>product namme</p>

          <input type="text" onChange={onchangeHandler} name='name' value={data.name} placeholder='Type here' />

        </div>

        <div className="add-product-description flex-col">

          <p>Product Description</p>

          <textarea onChange={onchangeHandler} name="description" value={data.description} rows="6" placeholder='Write Content Here' required></textarea>

        </div>

        <div className="add-category-price">

          <div className="add-category flex-col">

            <p>Product Category</p>

            <select onChange={onchangeHandler} value={data.category} name="category" >

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

            <input onChange={onchangeHandler} type="number" name='price' value={data.price} placeholder='LKR 100'/>

          </div>

        </div>

        <button className='add-btn' type='submit'>Add</button>
        
      </form>

    </div>

  )

}

export default Add