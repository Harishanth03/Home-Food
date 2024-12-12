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
        let cartData = await userData.cartData;
        //Check if cartItem available or not
        if(cartData[request.body.itemId] > 0)
        {
            cartData[request.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(request.body.userId , {cartData});

        response.json({success:true , message:"Removed from Cart"})

        
    } catch (error) 
    {
        console.log(error);
        response.json({success:false , message:"Error"});
    }

}

//========================================================= Frtch User Cart Data ===========================================

const getcart = async(request , response) => {

    try 
    {

        let userData = await userModel.findById(request.body.userId);

        let cartData = await userData.cartData;

        response.json({success:true , cartData})
        
    } catch (error) 
    {
        console.log(error);
        response.json({success:false , message:"Error"});
    }
}


export {addTocart , removeCart , getcart}

//findOne method use for find peticular doocument from the mongoDb , its method only available in Mongoose. its use find only one user

// : this colon using because i matching the data with userId because mongoose query using : this rather than ====
