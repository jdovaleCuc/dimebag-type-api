import jwt from "jwt-simple";
import moment from "moment";

export const CreateAuthToken = (user: { id: number }) => {
  const payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(5, "minutes").unix(),
  };
  return jwt.encode(payload, "" as string);
};
