import { Request, Response } from "express";
import logger from "../../infrastructure/utils/logger";

export const ErrorHandler = (Err: Error, Request: Request, Response: Response) => {
  let statuscode = 500;
  logger.OnError("error: ", Err.message);
  if (Err.message.match(/not found/)) statuscode = 404;

  return Response.status(statuscode).send({ error: Err.message });
};
