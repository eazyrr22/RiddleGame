import express from "express";
import riddleRouter from './routes/riddlesRouter.js';
import { config } from "dotenv";

config()

const PORT= process.env.SERVER_PORT

const app = express();


app.use('/riddles',riddleRouter)



app.listen(PORT,()=>{
    console.log(`server listening on port${PORT}`)
})