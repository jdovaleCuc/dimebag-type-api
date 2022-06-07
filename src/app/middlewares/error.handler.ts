import { NextFunction, Request, Response } from "express";
import { HTTP_RESPONSE } from "../../infrastructure/utils";
import { TypeORMError } from "typeorm";
import logger from "../../infrastructure/utils/logger/logger";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ErrorHandler = (Err: Error, Request: Request, Response: Response, Next: NextFunction) => {
	let statuscode = HTTP_RESPONSE.INTERNAL_ERROR;

	logger.OnError(Err.stack);

	if (Err.message.match(/not found/)) statuscode = HTTP_RESPONSE.NOT_FOUND;
	if (Err.message.match(/Unauthorized/)) statuscode = HTTP_RESPONSE.UNAUTHORIZED;
	if (Err.message.match(/is required/) || Err.message.match(/must be/)) statuscode = HTTP_RESPONSE.BAD_REQUEST;

	let message = Err.message.replace(/['"]+/g, "");

	/*
	 ** Control de errores Sql
	 */
	if (Err instanceof TypeORMError) {
		message = Err.name;
		statuscode = HTTP_RESPONSE.BAD_REQUEST;
	}

	return Response.status(statuscode).json({
		status: statuscode,
		error: message,
	});
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NotFoundHandler = (Req: Request, Res: Response, _Next: NextFunction) => {
	_Next(new Error("Resource not found"));
};
