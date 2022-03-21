import { IUser } from "../interfaces/user.interfaces";
import { findAllUsers } from "./querys/user";
import { DarellPool } from "../libs/darell.pool";

export default class UserService {
    
    constructor() {}

    async find(): Promise<IUser[]> {
        try {
            const response = await DarellPool.query<IUser>(findAllUsers);
            return response.rows;
        } catch (error) {
            throw error;
        }
    }
}