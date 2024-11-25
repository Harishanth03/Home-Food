import express from "express";

import cors from "cors";

import { connectDb } from "./Config/db.js";
import foodRouter from "./routes/foodRoute.js";

//===================================================== APP CONFIG ==================================================================

const app = express();
const PORT = 4000;

//===================================================== MIDDLEWARE ==================================================================

app.use(express.json());
app.use(cors());

//===================================================== DB CONNECTION ==================================================================

connectDb();

//===================================================== API END POINT ==================================================================
app.use("/api/food", foodRouter);
//===================================================== TEST CONNECTION ==================================================================

app.get("/" , (request , response ) => {

    response.send('API working')
});

//===================================================== CONNECT 2 SERVER ==================================================================

app.listen(PORT , () => console.log(`Server started on  http://localhost:${PORT}`));

//mongodb+srv://harishanth03:H200018503118h@cluster0.plbv9.mongodb.net/?