import React, { useState } from 'react'

import Header from '../../components/Header/Header'

import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisply/FoodDisplay'


const Home = () => {

  const [category , setCategory] = useState("All");

  return (
   <div>

   <Header/>

   <ExploreMenu category  = {category} setCategory = {setCategory} childern={<FoodDisplay category = {category}/>}/> 

   </div>
  )

}


export default Home