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
            userId:request.body.userId,
            items:request.body.items,
            amount:request.body.amount
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(request.body.userId , {cartData:{}});

        const line_items = request.body.items.map((item) => ({
            price_data:{
                currency:"lkr",
                product_data:{
                    name:item.name,
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"lkr",
                product_data:{
                    name:"Delivery Charges",
                },
                unit_amount:200
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
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