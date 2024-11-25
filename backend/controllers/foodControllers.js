import foodModel from "../models/foodModel.js";
import fs from "fs";

//====================================================== ADD FOOD ITEMS ===========================================================

const addFood = async (request , response) => {

    let image_filename = `${request.file.filename}`;

    let food = new foodModel({

        name:request.body.name,

        description: request.body.description,

        price: request.body.price,

        category: request.body.category,

        image: image_filename
    });

    try 
    {
       await food.save();

       response.json({success:true , message: "Food Added"})

    } catch (error) {
        
        console.log(error);

        response.json({success: false , message : "Error" })
    }

};

//================================================= list all Food ================================================================

const listFood = async(request , response) => {


}

export {addFood , listFood};