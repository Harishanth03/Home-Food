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


}

//========================================================= Frtch User Cart Data ===========================================

const getcart = async(request , response) => {


}


export {addTocart , removeCart , getcart}

//findOne method use for find peticular doocument from the mongoDb , its method only available in Mongoose. its use find only one user

// : this colon using because i matching the data with userId because mongoose query using : this rather than ====
