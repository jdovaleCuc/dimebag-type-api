import { Router } from "express";

export interface Controller {
    path: string,
    router: Router,
    name: string
}

export interface HandlerReq {}

export interface IResponse {
    code: string,
    error: boolean,
    message: string,
    data: any[]
}