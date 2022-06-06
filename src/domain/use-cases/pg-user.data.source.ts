import { ICreateUser } from "../interfaces/entities/user.interface";
import { IUserDataSource } from "../../data/interfaces/data-sources/user.data.source";
import UserRepository from "../repositories/user.respository";
import IdentifiersRepository from "../repositories/indentifiers.repository";
import { User } from "../models/entitys/user.entity";

const UserDataSource: IUserDataSource = {
  create: async (UserModel: ICreateUser) => {
    const identifier = await IdentifiersRepository.findOneByOrFail({
      id: UserModel.tipo_identificacion,
    });

    const user = new User();

    user.nombre = UserModel.nombre;
    user.apellidos = UserModel.apellidos;
    user.tipo_identificacion = identifier;
    user.numero_identificacion = UserModel.numero_identificacion;
    user.fecha_nacimiento = UserModel.fecha_nacimiento;

    await UserRepository.save(user);
  },
  find: async (id: number): Promise<User> => {
    const User = (await UserRepository.findBy({ id: id }))[0];
    return User;
  },
  findAll: async (): Promise<User[]> => {
    const Users = await UserRepository.find({
      relations: {
        tipo_identificacion: true,
      },
    });

    return Users;
  },
};

export default UserDataSource;
