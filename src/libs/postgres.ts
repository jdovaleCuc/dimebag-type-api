import { Client } from 'pg'

export const ConnectionDB = async (): Promise<Client> => {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'kain',
        password: 'admin123',
        database: 'darell' 
    })
    await client.connect()
    return client;
}

