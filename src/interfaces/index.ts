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

export interface IUser {
    id: number,
    nombre: string,
    apellidos: string,
    tipo_identificacion:number,	
    fecha_nacimiento: string	
    estado: string	
    atributos: any
}