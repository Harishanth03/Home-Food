import mongoose from "mongoose";

export const connectDb = async () => {

    try
    {
        await mongoose.connect('mongodb+srv://harishanth03:H200018503118h@cluster0.plbv9.mongodb.net/home-food').then(() => console.log('DB connected'));
    }
    catch(error)
    {
        console.log('DB Connection Failed' , error.message);
    }
}