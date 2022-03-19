

export interface IUser {
    id: number,
    nombre: string,
    apellidos: string,
    tipo_identificacion:number,	
    fecha_nacimiento: string	
    estado: string	
    atributos: any
}

export interface ICreateUser {
    nombre: string,
    apellidos: string,
    tipo_identificacion: number,
    numeroIdentificacion: number,
    fecha_nacimiento: string,
    credenciales: ICredencialUser
}

interface ICredencialUser {
    correo : string,
    usuario : string,
    contraseña : string
}