import { NextFunction, Request, Response } from "express";
import logger from "../../infrastructure/utils/logger/logger";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ErrorHandler = (Err: Error, Request: Request, Response: Response, _Next: NextFunction) => {
  let statuscode = 500;
  
  logger.OnError(Err.stack);

  if (Err.message.match(/not found/)) statuscode = 404;
  if (Err.message.match(/Unauthorized/)) statuscode = 401;
  if (Err.message.match(/[is required, must be]/)) statuscode = 400;

  const message = Err.message.replace(/['"]+/g, '')

  return Response.status(statuscode).json({
    status: statuscode,
    error: message,
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NotFoundHandler = (Req: Request, Res: Response, _Next: NextFunction) => {
  Res.status(404).json({
    status: 404,
    error: 'recurso no pudo ser encontrado'
  })
}