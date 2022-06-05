import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export enum ValidationSource {
    BODY = 'body',
    HEADER = 'headers',
    QUERY = 'query',
    PARAM = 'params'
 }

export default (Schema: Joi.Schema, Param: ValidationSource = ValidationSource.BODY) =>
  (Request: Request, Response: Response, Next: NextFunction) => {
    const { error } = Schema.validate(Request[Param]);

    if (!error) return Next();

    const { message } = error;
    Next(new Error(message));
  };
