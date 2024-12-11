import express from "express";

import { addTocart , removeCart , getcart } from "../controllers/cartController.js";

import authMiddleWare from "../middleware/auth.js";

const cartRouter = express.Router();

//End points 
 cartRouter.post("/add" , authMiddleWare , addTocart);

 cartRouter.post('/remove' , authMiddleWare , removeCart);

 cartRouter.post("/get" , authMiddleWare , getcart);


//===================================================== Export ====================================================================

 export default  cartRouter;