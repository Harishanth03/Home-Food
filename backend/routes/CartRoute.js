import express from "express";

import { addTocart , removeCart , getcart } from "../controllers/cartController.js";

const cartRouter = express.Router();

//End points 
 cartRouter.post("/add" , addTocart);

 cartRouter.post('/remove' , removeCart);

 cartRouter.post("/get" , getcart);


//===================================================== Export ====================================================================

 export default  cartRouter;