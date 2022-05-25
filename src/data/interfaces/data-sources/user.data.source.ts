import { ICreateUser, IUser } from '../../../domain/interfaces/entities/user.interface';


export interface IUserDataSource {
    create: (User: ICreateUser) => Promise<unknown>
    find: (id: number) => Promise<IUser>
}