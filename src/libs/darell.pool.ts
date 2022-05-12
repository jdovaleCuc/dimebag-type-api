import { Pool } from 'pg'
import logger from '../utils/logger'
import { config } from '../config'

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const DarellPool = new Pool( { connectionString: URI })


DarellPool.on('error', (error: any) => {
    logger.OnError(error)
})


DarellPool.on('connect', () => {
    logger.onSucess('[POOL]******** CONECTED')
})

