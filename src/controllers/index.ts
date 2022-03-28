import { Router, Response } from "express";
import { HTTP_RESPONSE } from "../utils";
import { Controller, IResponse, IValidatorDetails } from "../interfaces";

export default abstract class MainController implements Controller{
     
    public readonly router: Router;

    constructor(public path:string, public name:string){
        this.router = Router({caseSensitive: true}) 
        this.path = !path.startsWith('/') ? `/${this.path}` : this.path
    }

    ResponseHttp = (StatusCode: number, Data: IResponse, Response: Response) => {
        Response.status(StatusCode).send(Data)
    }

    InternalError = (Response: Response, message?: string) => {
        this.ResponseHttp(HTTP_RESPONSE.INTERNAL_ERROR, {
            code: '50000',
            error: true,
            message: message ?? 'Error Interno'
        }, Response)
    }

    BadRequestError = (Response: Response, message?: any, validate?: IValidatorDetails[]) => {
        this.ResponseHttp(HTTP_RESPONSE.BAD_REQUEST, {
            code: '40000',
            error: true,
            message: message ?? 'Error en datos enviados',
            validate: validate
        }, Response)
    }

    UnAutorizedError = (Response: Response, message?: any) => {
        this.ResponseHttp(HTTP_RESPONSE.UNAUTHORIZED, {
            code: '403000',
            error: true,
            message: message ?? 'Usuario no autorizado',
        }, Response)
    }

}