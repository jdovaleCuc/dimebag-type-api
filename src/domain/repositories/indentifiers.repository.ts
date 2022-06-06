import PostgressDataSource from "../../data/data-source/postgres/data.source";
import { Identifiers } from "../models/entitys/indentifier.entity";

const IdentifiersRepository = PostgressDataSource.getRepository(Identifiers);

export default IdentifiersRepository;


