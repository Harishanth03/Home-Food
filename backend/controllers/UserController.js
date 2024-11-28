import userModel from "../models/UserModel";

import jsonWebToken from "jsonwebtoken"; //implement secure connection

import bycrypt from "bcrypt"; // hash the password data

import validator from "validator"; // validate the email

//==================================================== LOGIN USER FUNCTION =============================================================

const loginUser = async (request , response) => {


}

//=================================================== REGISTER USERBFUNCTION =========================================================

const registerUser = async (request , response) => {

    const {name , passWord , email} = request.body;

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

        if(passWord.length < 8)
        {
            response.json({success:false , message:"Please enter strong password"});
        }

        const salt = await bycrypt.genSalt(10)

        const hasedPassword = await bycrypt.hash(passWord , salt);

        const newUser = new userModel(
            {
                name: name,

                email: email,

                passWord: hasedPassword
            }
        );

        const user =  await newUser.save();

        
    }
    catch(error)
    {

    }

}

export {registerUser , loginUser}