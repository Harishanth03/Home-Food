import userModel from "../models/UserModel.js";

import orderModel from "../models/orderModel.js";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPT_SECRET_KEY);

/*===================================================================================================================================
-------------------------------------------------Placing User Order for frontEnd-----------------------------------------------------
=================================================================================================================================== */

const placeOrder = async(request , response) => {

    try 
    {
        const newOrder = new orderModel({
            
        })
    } 
    catch (error) 
    {
        
    }
    
}

export {placeOrder}