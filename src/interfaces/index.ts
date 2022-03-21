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
    data?: any[],
    validate?: IValidatorDetails[]
}

export interface IValidator {
    schema: IValidatorSchema[]
    data: object,
    extended: boolean
}

export interface IValidatorResponse{
    validate: boolean
    details: IValidatorDetails[]
    extra: any
}

interface IValidatorSchema {
    type: string,
    name: string,
    isRequired: boolean,
    min?: number,
    max?: number
}

export interface IValidatorDetails {
    prop: string,
    obs: string
}
