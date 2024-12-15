import { placeOrder, userOrders, verifyOrder } from "../controllers/orderController.js";

import express from "express"

import authMiddleWare from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place" , authMiddleWare , placeOrder);
orderRouter.post("/verify" , verifyOrder);
orderRouter.post("/userorders" , authMiddleWare , userOrders); // set middleware to get the userId using the token and use the userId and get the orders


export default orderRouter;