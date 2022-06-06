import { User } from "../../../domain/models/entitys/user.entity";
import { DataSource } from "typeorm";
import { Identifiers } from "../../../domain/models/entitys/indentifier.entity";

const PostgressDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '$Novus315.',
    database: 'cementary-gates',
    synchronize: true,
    logging: false,
    entities: [ User, Identifiers ],
    subscribers: [],
    migrations: []
})

export default PostgressDataSource