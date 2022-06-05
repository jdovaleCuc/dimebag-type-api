import { User } from "../../../domain/interfaces/entities/user.entity";
import { DataSource } from "typeorm";

const PostgressDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '$Novus315.',
    database: 'cementary-gates',
    synchronize: true,
    logging: true,
    entities: [ User ],
    subscribers: [],
    migrations: []
})

export default PostgressDataSource