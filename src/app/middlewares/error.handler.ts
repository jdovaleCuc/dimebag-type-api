import { NextFunction, Request, Response } from "express";
import { HTTP_RESPONSE } from "../../infrastructure/utils";
import { TypeORMError } from "typeorm";
import logger from "../../infrastructure/utils/logger/logger";
import { HttpRequestError } from "../../infrastructure/error/http.error";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ErrorHandler = (Err: Error, Request: Request, Response: Response, Next: NextFunction) => {
	let statuscode = HTTP_RESPONSE.INTERNAL_ERROR;

	logger.OnError(Err.stack);

	let message = Err.message.replace(/['"]+/g, "");

	/*
	 ** Control de errores Sql
	 */
	if (Err instanceof TypeORMError) {
		message = Err.name;
		statuscode = HTTP_RESPONSE.BAD_REQUEST;
	} else if (Err instanceof HttpRequestError) {
		statuscode = Err.status
	}

	return Response.status(statuscode).json({
		status: statuscode,
		error: message,
	});
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NotFoundHandler = (Req: Request, Res: Response, _Next: NextFunction) => {
	Res.status(404).send('not found')
};
