import { Application } from "express";
import routesV1 from "../../presentation/routes/v1.0/index";
import { NotFoundHandler } from "../middlewares/error.handler";

export default function router(app: Application) {
  app.use("/v1.0", routesV1);
  app.use(NotFoundHandler)
}
