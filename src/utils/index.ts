export enum HTTP_RESPONSE {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    INTERNAL_ERROR = 500,
    NOT_FOUND = 404
}

export enum VALIDATOR_MESSAGES {
    IS_REQUIRED = 'La propiedad es requerida',
    NOT_ALLOWED = 'La propiedad no es permitida',
    NEED_VERIFED = 'Verifique la propiedad',
    WRONG_TYPE = 'La propiedad debe ser de tipo ?',
    WRONG_MIN_SIZE = 'La propiedad deber tener un tamaño minimo de ?',
    WRONG_MAX_SIZE = 'La propiedad deber tener un tamaño Maximo de ?'
}

export enum RESPONSE_API_MESSAGES {
    VALIDATE_ERROR = 'ERROR AL VALIDAR INFORMACION'
}

export enum DATA_TYPES {
    NUMBER = 'Number',
    STRING = 'String',
    OBJECT = 'Object',
    ARRAY = 'Array',
    EMAIL = 'Email',
    PASSWORD = 'Password'
}

export const DATE_FORMAT:string = 'YYYY-MM-DD HH:SS'

export const validateEmailExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;