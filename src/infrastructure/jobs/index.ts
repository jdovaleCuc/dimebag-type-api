import jwt from "jwt-simple";
import bcrypt from "bcrypt";
import moment from "moment";

export const CreateAuthToken = (user: { id: number }) => {
  const payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(5, "minutes").unix(),
  };
  return jwt.encode(payload, "" as string);
};

export const Hash = async (Text: string): Promise<string> => {
  const hash = await bcrypt.hash(Text, 10);
  return hash;
};
