import mongoose from "mongoose";

export const connectDb = async () => {

    await mongoose.connect('mongodb+srv://harishanth03:H200018503118h@cluster0.plbv9.mongodb.net/home-food').then(() => console.log('DB connected'));
}