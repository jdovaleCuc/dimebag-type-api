import { HTTP_RESPONSE, RESPONSE_API_MESSAGES } from "../utils";
import { NextFunction, Request, Response } from "express";
import MainController from ".";
import UserService from "../services/user.service";
import { ICreateUser, IUser } from "../interfaces/user.interfaces";
import { validator } from "../validation/validator";
import { IValidator } from "../interfaces";


export default class UserController extends MainController {

    service: UserService;
    constructor() {
        super('user', UserController.name);
        this.service = new UserService()

        this.router.route(`${this.path}`).
            get(this.GetUsers).
            post(this.ValidateUserInfo, this.CreateUser)
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
            const data: IUser[] = await this.service.find()
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

    ValidateUserInfo = (Request: Request, Response: Response, next: NextFunction) => {
        try {
            const data: ICreateUser = <ICreateUser>Request.body
            const validation: IValidator = {
                schema: [
                    {
                        type: String.name.toString(),
                        name: 'nombre',
                        isRequired: true
                    },
                    {
                        type: String.name.toString(),
                        name: 'apellidos',
                        isRequired: true
                    },
                    {
                        type: Number.name.toString(),
                        name: 'tipo_identificacion',
                        isRequired: true
                    },
                    {
                        type: Number.name.toString(),
                        name: 'numeroIdentificacion',
                        isRequired: true
                    },
                    {
                        type: String.name.toString(),
                        name: 'fecha_nacimiento',
                        isRequired: true
                    },
                ],
                data: data,
                extended: true
            }
            const res_validate = validator(validation);
            if (!res_validate.validate) {
                this.BadRequestError(Response, res_validate.details)
                return;
            }
            next()
        } catch (error) {
            console.log(error)
            this.InternalError(Response, RESPONSE_API_MESSAGES.VALIDATE_ERROR)
        }
    }
}