import moment from 'moment'
import { DATE_FORMAT } from '.'

export default {

    OnError: (msg: string, error : Error | string = '') => {
        console.log(`
❌|${'[ERROR]'.bgRed} ${`${moment().format(DATE_FORMAT)}`.bgCyan} ${error}
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