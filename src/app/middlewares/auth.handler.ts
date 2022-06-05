import { NextFunction, Request, Response } from "express";


export const CheckApiKey = (Req: Request, Res:Response, Next:NextFunction) => {
    const apiKey = Req.get('api') as string;
    if(apiKey !== '123'){
        Next(new Error('Unauthorized'))
    }
    Next()
}