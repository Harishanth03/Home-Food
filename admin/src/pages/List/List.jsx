import React, { useEffect, useState } from 'react';

import "./List.css";

import axios from 'axios';

import { toast } from 'react-toastify';

import { url } from '../../assets/assets';

const List = () => {

  const GetURL = "http://localhost:4000"

  const [list , setList] = useState([]);

  const fetchList = async () => {

    const response = await axios.get(`${GetURL}/api/food/list`);

    console.log(response.data);

    if(response.data.success)
    {
      setList(response.data.data);
    }
    else
    {
      toast.error("Error");
    }
  };

  useEffect( ()=>{

    fetchList();

  } , []);

  const removeFood = async(food_List) => {

    const response = await axios.post(`${url}/api/food/remove`, {id:food_List});

    await fetchList();

  };

  

  return (

    <div className='list add flex-col'>

      <p>All food list</p>

      <div className="list-table">

        <div className="list-table-format title">

          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>

        </div>

        {list.map((Item , index ) => {

          return(

            <div key={index} className='list-table-format remove'>

              <img src={`${url}/images/` + Item.image} alt="" />

              <p>{Item.name}</p>

              <p>{Item.category}</p>

              <p>LKR: {Item.price}</p>

              <p onClick={() => removeFood(Item._id)} className='cursor'>X</p>

            </div>

          )

        })}

      </div>

    </div>
  )
}

export default List