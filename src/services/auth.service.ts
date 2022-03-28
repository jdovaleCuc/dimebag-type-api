import { DarellPool } from "../libs/darell.pool";
import { SearchUser } from "./querys/auth";

export default class AuthService {

    constructor() { }

    async CheckIfUserExists(user: string, password: string): Promise<any | null> {
        try {
            const res = await DarellPool.query(SearchUser, [user, password]);
            if (res.rowCount > 0) {
                return res.rows[0];
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}