import { IValidator } from "../../interfaces";

export const UserSchemas = {
    create: [
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
    ]
}
