import { ICreateUser } from "../../../domain/interfaces/entities/user.interface";
import { IUserDataSource } from "../../interfaces/data-sources/user.data.source";
import UserRepository from "../../../domain/repositories/user.respository";
import { User } from "../../orm/user-orm.model";

export const UserDataSource: IUserDataSource = {
  create: async (UserModel: ICreateUser) => {
    const user = new User();

    user.nombre = UserModel.nombre;
    user.apellidos = UserModel.apellidos;
    user.tipo_identificacion = UserModel.tipo_identificacion;
    user.numero_identificacion = UserModel.numeroIdentificacion;
    user.fecha_nacimiento = UserModel.fecha_nacimiento;

    await UserRepository.save(user);
  },
  find: async (id: number) => {
    const User = (await UserRepository.findBy({ id: id }))[0];
    return User;
  },
};
