import userModel from "../models/UserModel.js";

import jsonWebToken from "jsonwebtoken"; //implement secure connection

import bycrypt from "bcrypt"; // hash the password data

import validator from "validator"; // validate the email

//==================================================== LOGIN USER FUNCTION =============================================================

const loginUser = async (request , response) => {


}

const createToken = (id) => {

    return jsonWebToken.sign({id} , process.env.JWT_SECRET);
}

//=================================================== REGISTER USERBFUNCTION =========================================================

const registerUser = async (request , response) => {

    const {name , password , email} = request.body;

    try
    {
        const exists = await userModel.findOne({email});

        if(exists)
        {
            return response.json({success:false , message:"User already register"});
        }

        if(!validator.isEmail(email))
        {
            return response.json({success:false , message:"Please enter valied Email"});
        }

        if(password.length < 8)
        {
            response.json({success:false , message:"Please enter strong password"});
        }

        const salt = await bycrypt.genSalt(10)

        const hasedPassword = await bycrypt.hash(password , salt);

        const newUser = new userModel(
            {
                name: name,

                email: email,

                password: hasedPassword
            }
        );

        const user =  await newUser.save();

        const token = createToken(user._id);

        response.json({success:true , token});

        
    }
    catch(error)
    {
        console.log(error);
        response.json({success:false , message:"Error"});
    }

}

export {registerUser , loginUser}