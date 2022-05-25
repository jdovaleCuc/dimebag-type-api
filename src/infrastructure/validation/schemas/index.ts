import { DATA_TYPES } from "../../utils";

export const UserSchemas = {
  create: [
    {
      type: String.name.toString(),
      name: "nombre",
      isRequired: true,
    },
    {
      type: String.name.toString(),
      name: "apellidos",
      isRequired: true,
    },
    {
      type: Number.name.toString(),
      name: "tipo_identificacion",
      isRequired: true,
    },
    {
      type: Number.name.toString(),
      name: "numeroIdentificacion",
      isRequired: true,
    },
    {
      type: String.name.toString(),
      name: "fecha_nacimiento",
      isRequired: true,
    },
    {
      type: DATA_TYPES.EMAIL,
      name: "email",
      isRequired: true,
    },
    {
      type: String.name.toString(),
      name: "usuario",
      isRequired: true,
    },
    {
      type: String.name.toString(),
      name: "contraseña",
      isRequired: true,
    },
  ],
  userDetails: [
    {
      type: DATA_TYPES.EMAIL,
      name: "email",
      isRequired: true,
    },
    {
      type: String.name.toString(),
      name: "usuario",
      isRequired: true,
    },
    {
      type: DATA_TYPES.PASSWORD,
      name: "contraseña",
      isRequired: true,
    },
  ],
};
