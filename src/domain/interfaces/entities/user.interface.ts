
export interface IUser {
    id: number,
    nombre: string,
    apellidos: string,
    tipo_identificacion:number,	
    fecha_nacimiento: string	
    estado: boolean	
    atributos: object
}

export interface ICreateUser {
    nombre: string,
    apellidos: string,
    tipo_identificacion: number,
    numero_identificacion: number,
    fecha_nacimiento: string,
    credenciales: ICredencialUser
}

interface ICredencialUser {
    correo : string,
    usuario : string,
    contraseña : string
}

