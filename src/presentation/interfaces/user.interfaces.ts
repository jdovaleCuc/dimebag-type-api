import { NextFunction, Request, Response } from "express";


export interface UserRouter {
    create: (Request: Request, Response: Response, Next?: NextFunction) => Promise<void>
}