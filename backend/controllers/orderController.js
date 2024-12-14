import userModel from "../models/UserModel.js";

import orderModel from "../models/orderModel.js";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPT_SECRET_KEY);

/*===================================================================================================================================
-------------------------------------------------Placing User Order for frontEnd-----------------------------------------------------
=================================================================================================================================== */

const placeOrder = async(request , response) => {

    const frontend_url = "http://localhost:5173";

    try 
    {
        const newOrder = new orderModel({
            userId:response.body.userId,
            items:response.body.items,
            amount:response.body.amount
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(response.body.userId , {cartData:{}});

        const line_items = request.body.items.map((item) => ({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name,
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges",
                },
                unit_amount:2*100*80
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._Id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._Id}`
        })

        response.json({success:true , session_url:session.url});
    } 
    catch (error) 
    {
        console.log(error);
        response.json({success:false , message:"Error"});
    }
    
}

export {placeOrder}