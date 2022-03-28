import MainController from "./index";
import { NextFunction, Request, Response } from "express";
import { HTTP_RESPONSE } from "../utils";
import AuthService from "../services/auth.service";
import logger from "../utils/logger";

export default class AuthController extends MainController {

    service:AuthService;

    constructor() {
        super('auth', AuthController.name);
        this.service = new AuthService();

        this.router.route(`${this.path}/logIn`).post(this.ValidateUser,  this.LogIn)

    }

    ValidateUser = async (Request: Request, Response: Response, next:NextFunction) => {
        try {
            const credentials = <{ user:string, contraseña:string}>Request.body;
            const user = await this.service.CheckIfUserExists(credentials.user, credentials.contraseña);
            if (user === null) {
                this.UnAutorizedError(Response, 'Datos erroneos, Verifique')
                return;
            }
            next();
        } catch (error) {
            logger.OnError(error);
            this.InternalError(Response, 'Error al validar usuario')
        }
    }

    LogIn = (Request: Request, Response: Response) => {
        try {
            return ;
        } catch (error) {
            logger.OnError(error);
            this.InternalError(Response, 'Error al validar usuario') 
        }
    }
}