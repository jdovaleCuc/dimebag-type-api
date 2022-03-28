import jwt from 'jwt-simple'
import moment from 'moment'
import { config } from '../config';

export const CreateAuthToken = (user: any) => {
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(5, 'minutes').unix()
    };
    return jwt.encode(payload, config.token);
}