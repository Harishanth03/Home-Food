import { placeOrder } from "../controllers/orderController.js";

import express from "express"

import authMiddleWare from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place" , authMiddleWare , placeOrder);



export default orderRouter;