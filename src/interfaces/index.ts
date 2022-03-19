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
    data?: any[]
}

export interface IValidator {
    schema: IValidatorSchema[]
    data: object,
    extended: boolean
}

export interface IValidatorResponse{
    validate: boolean
    details: string
    extra: any
}

interface IValidatorSchema {
    type: string,
    name: string,
    isRequired: boolean,
    min?: number,
    max?: number
}
