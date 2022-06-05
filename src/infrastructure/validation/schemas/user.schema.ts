import Joi from "joi";

interface UserSchema {
  create: Joi.Schema;
}

const UserSchema: UserSchema = {
  create: Joi.object({
    nombre: Joi.string().min(1).max(100).required(),
    apellidos: Joi.string().min(1).max(100).required(),
    tipo_identificacion: Joi.number().integer().min(1).max(10).required(),
    numero_identificacion: Joi.number().integer().min(1).max(999999999999).required(),
    fecha_nacimiento: Joi.date().required()
  }).required(),
};

export default UserSchema;
