import moment from 'moment'
import { DATE_FORMAT } from '../index'

export default {

    OnError: (error : Error | string = '') => {
        console.error(`
❌|${'[ERROR]'.red} ${`${moment().format(DATE_FORMAT)}`.bgCyan} ${error}
        `)
    },

    OnInfo: (InfoMessage : string, info?: unknown) => {
        console.log(`
⚠️|${'[INFO]'.bgYellow} ${`${moment().format(DATE_FORMAT)}`.bgCyan} ${InfoMessage} ${info ?? ''}
        `)
    },

    onSucess: (InfoMessage : string, info?: unknown) => {
        console.log(`
|${'[SUCESS]'.bgGreen} ${`${moment().format(DATE_FORMAT)}`.bgCyan} ${InfoMessage} ${info ?? ''}
        `)
    }
}