import { User } from '../../../domain/models/entitys/user.entity';
import { ICreateUser } from '../../../domain/interfaces/entities/user.interface';


export interface IUserDataSource {
    create: (User: ICreateUser) => Promise<unknown>
    find: (id: number) => Promise<User>
    findAll: () => Promise<User[]> 
}