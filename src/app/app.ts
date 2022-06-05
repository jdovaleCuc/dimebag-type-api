import "reflect-metadata"

import express from "express";
import morgan from "morgan";
import router from "./config/routes";
import { ErrorHandler } from "./middlewares/error.handler";

const app = express();

//morgan
app.use(morgan(`${'[PETICION HTTP]'.magenta} *************** :url :status :response-time ms *** ${':method'.bgGreen}`))

//middlewares
app.use(express.json());
router(app)
app.use(ErrorHandler);

export default app;
