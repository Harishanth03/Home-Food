import express from "express";

import cors from "cors";

//===================================================== APP CONFIG ==================================================================

const app = express();
const PORT = 4000;

//===================================================== MIDDLEWARE ==================================================================

app.use(express.json());
app.use(cors());

app.get("/" , (request , response ) => {

    response.send('API working')
});

app.listen(PORT , () => console.log(`Server started on  http://localhost:${PORT}`));