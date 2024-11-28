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
    }
    catch(error)
    {

    }

}

export {registerUser , loginUser}