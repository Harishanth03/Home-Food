import userModel from "../models/UserModel.js";

//=========================================================== Add Items To User Carts =================================================

const addTocart = async(request , response) => {

    try 
    {

        let userData = await userModel.findOne({_id:request.body.userId});

        let cartData = await userData.cartData;

        if(!cartData[request.body.itemId])
        {
            cartData[request.body.itemId] = 1
        }
        else
        {
            cartData[request.body.itemId] += 1;
        }


        
    } catch (error) 
    {
        
    }

}


//========================================================= Remove Items From User carts ===========================================

const removeCart = async(request , response) => {


}

//========================================================= Frtch User Cart Data ===========================================

const getcart = async(request , response) => {


}


export {addTocart , removeCart , getcart}