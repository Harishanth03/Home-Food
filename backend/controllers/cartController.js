import userModel from "../models/UserModel.js";

//=========================================================== Add Items To User Carts =================================================

const addTocart = async(request , response) => {

    try 
    {

        let userData = await userModel.findOne({_id:request.body.userId}); // findOne 

        let cartData = await userData.cartData;

        if(!cartData[request.body.itemId])
        {
            cartData[request.body.itemId] = 1
        }
        else
        {
            cartData[request.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(request.body.userId , {cartData});

        response.json({success:true , message:"Added to cart"});
   
    } catch (error) 
    {
        console.log(error);

        response.json({success:false , message:"Error"})
    }

}


//========================================================= Remove Items From User carts ===========================================

const removeCart = async(request , response) => {

    try 
    {

        //1st get the UserData
        let userData = await userModel.findById(request.body.userId);
        //then got the CartItem
        let CartData = await userData.cartData;
        //Check if cartItem available or not
        if(CartData[request.body.itemId] > 0)
        {
            CartData[request.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(request.body.userId , {CartData});

        response.json({success:true , message:"Removed from Cart"})

        
    } catch (error) 
    {
        console.log(error);
        response.json({success:false , message:"Error"});
    }

}

// const removeCart = async (req, res) => {
//     try {
//         // Fetch user data from the database based on userId
//         let userData = await userModel.findById(req.body.userId);

//         // Get the cartData for the user
//         let cartData = userData.cartData;

//         // Check if the item exists in the cart and its quantity is greater than 0
//         if (cartData[req.body.itemId] > 0) {
//             cartData[req.body.itemId] -= 1; // Decrease the item quantity by 1
//         }

//         // Update the user document with the modified cartData
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData });

//         // Send a success response
//         res.json({ success: true, message: "Removed From Cart" });
//     } catch (error) {
//         // If an error occurs, log it and send a failure response
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// };


//========================================================= Frtch User Cart Data ===========================================

const getcart = async(request , response) => {


}


export {addTocart , removeCart , getcart}

//findOne method use for find peticular doocument from the mongoDb , its method only available in Mongoose. its use find only one user

// : this colon using because i matching the data with userId because mongoose query using : this rather than ====
