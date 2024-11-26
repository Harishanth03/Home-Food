import express from "express";

import { addFood, listFood, removeFoodItems } from "../controllers/foodControllers.js";

import multer from "multer";

const foodRouter = express.Router();

//========================================================== Image Storage Engine ===================================================

const storage = multer.diskStorage(
    {

        destination: "uploads",

        filename: (request , file , callBack) => 
        {

            return callBack(null , `${Date.now()} ${file.originalname}`);

        }

    }
);

const upload = multer({storage:storage});

foodRouter.post("/add" , upload.single("image") , addFood)

foodRouter.get("/list" , listFood);

foodRouter.post("/remove" , removeFoodItems);









export default foodRouter;
