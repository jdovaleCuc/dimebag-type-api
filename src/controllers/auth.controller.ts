import MainController from "./index";
import { Request, Response } from "express";
import { HTTP_RESPONSE } from "../utils";

export default class AuthController extends MainController {

    constructor() {
        super('auth', AuthController.name);
        this.router.route(`${this.path}/create`).post(this.CreateUser)
    }

    CreateUser = async (Request: Request, Response: Response) => {
        setTimeout(() => {
            this.ResponseHttp(HTTP_RESPONSE.OK, {
                code: '20000',
                error: false,
                message: 'User created',
                data: []
            }, Response)    
        }, 2000);
    } 

}