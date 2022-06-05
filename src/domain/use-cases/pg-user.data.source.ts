import { ICreateUser, IUser } from "../interfaces/entities/user.interface";
import { IUserDataSource } from "../../data/interfaces/data-sources/user.data.source";
import UserRepository from "../repositories/user.respository";
import { User } from "../../data/orm/entitys/user-orm.entity";

const UserDataSource: IUserDataSource = {
  create: async (UserModel: ICreateUser) => {
    const user = new User();

    user.nombre = UserModel.nombre;
    user.apellidos = UserModel.apellidos;
    user.tipo_identificacion = UserModel.tipo_identificacion;
    user.numero_identificacion = UserModel.numeroIdentificacion;
    user.fecha_nacimiento = UserModel.fecha_nacimiento;

    await UserRepository.save(user);
  },
  find: async (id: number): Promise<IUser> => {
    const User = (await UserRepository.findBy({ id: id }))[0];
    return User;
  },
};

export default UserDataSource;
