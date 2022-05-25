import express from "express";
import morgan from "morgan";
import { ErrorHandler } from "./middlewares/error.handler";

const app = express();

//middlewares
app.use(express.json());
app.use(ErrorHandler);

//morgan
app.use(morgan(`${'[PETICION HTTP]'.magenta} *************** :url :status :response-time ms *** ${':method'.bgGreen}`))

export default app;
