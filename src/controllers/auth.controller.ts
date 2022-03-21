import MainController from "./index";
import { Request, Response } from "express";
import { HTTP_RESPONSE } from "../utils";

export default class AuthController extends MainController {

    constructor() {
        super('auth', AuthController.name);
        this.router.route(`${this.path}/create`).post()
    }
}