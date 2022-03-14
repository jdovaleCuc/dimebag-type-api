import { Router, Response } from "express";
import { Controller, IResponse } from "../interfaces";

export default abstract class MainController implements Controller{
     
    public readonly router: Router;

    constructor(public path:string, public name:string){
        this.router = Router({caseSensitive: true}) 
        this.path = `${this.path}`
    }

    ResponseHttp = (StatusCode: number, Data: IResponse, Response: Response) => {
        Response.status(StatusCode).send(Data)
    }

}