import express from "express";
import riddleRouter from './routes/riddlesRouter';

const app = express();

app.use(express.json);

app.use('/riddles',riddleRouter)