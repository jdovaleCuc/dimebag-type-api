import { DataSource } from "typeorm";

const PostgressDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin123',
    database: 'cementary-gates'
})

export default PostgressDataSource