import React from 'react'

import "./SideBar.css";
import { assets } from '../../assets/assets';

const SideBar = () => {
  return (

    <div className='sidebar'>
        
      <div className="sidebar-option">
        
        <img src={assets.add_icon} alt="" />
        <p>Add Items</p>

        <img src={assets.order_icon} alt="" />
        <p>List Items</p>
        
        <img src={assets.order_icon} alt="" />
        <p>Orders</p>

      </div>

    </div>
  )
}

export default SideBar