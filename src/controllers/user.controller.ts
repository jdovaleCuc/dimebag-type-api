import { HTTP_RESPONSE } from "../utils";
import { Request, response, Response } from "express";
import MainController from ".";
import UserService from "../services/user.service";
import { IUser } from "../interfaces";


export default class UserController extends MainController {

    service: UserService;
    constructor() {
        super('user', UserController.name);
        this.service = new UserService()

        this.router.route(`${this.path}`).
            get(this.GetUsers).
            post(this.CreateUser)
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

    GetUsers = async (Request: Request, Response: Response) => {
        try {
            const data:IUser[] = await this.service.find() 
            this.ResponseHttp(HTTP_RESPONSE.OK, {
                code: '20000',
                error: false,
                message: 'Usuarios obtenidos',
                data: data
            }, Response)
        } catch (error) {
            console.log(error)
            this.InternalError(Response);
        }
    }
}