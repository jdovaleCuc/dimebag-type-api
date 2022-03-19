import { IUser } from "../interfaces/user.interfaces";
import { ConnectionDB } from "../libs/postgres";
import { findAllUsers } from "./querys/user";


export default class UserService {
    
    constructor() {}

    async find(): Promise<IUser[]> {
        try {
            const Client = await ConnectionDB();
            const response = await Client.query<IUser>(findAllUsers);
            return response.rows;
        } catch (error) {
            throw error;
        }
    }
}