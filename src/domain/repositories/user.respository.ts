import PostgressDataSource from "../../data/data-source/postgres/data.source";
import { User } from "../models/entitys/user.entity";

const UserRepository = PostgressDataSource.getRepository(User);

export default UserRepository;
