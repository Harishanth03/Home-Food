import jwt from "jsonwebtoken";

const authMiddleWare = async(request , response , next) => {

   const {token} = request.headers; 

   if(!token)
   {

    response.json({success:false , message:"Not Authorixed Please Login Again!"} );

   }

   try 
   {

    const token_decode = jwt.verify(token , process.env.JWT_SECRET);

    request.body.userId = token_decode.id;

    next();

   } catch (error) {

    console.log(error);

    response.json({success:false , message:"Error"});
    
   }
}

export default authMiddleWare;