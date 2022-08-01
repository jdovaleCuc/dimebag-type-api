import moment from 'moment'
import { DATE_FORMAT } from '../index'
import colors from 'colors'

export default {

    OnError: (error: Error | string = '') => {
        console.error(`
${`${moment().format(DATE_FORMAT)}`.bgCyan} ❌|${'[ERROR]'.red} ${error}
        `)
    },

    OnInfo: (InfoMessage: string, info?: unknown) => {
        console.log(`${`${moment().format(DATE_FORMAT)}`.bgCyan} ⚠️  | ${'[INFO]'.yellow}  ${colors.bold.magenta(InfoMessage)} ${info ?? ''}`)
    },

    onSucess: (InfoMessage: string, info?: unknown) => {
        console.log(`
${`${moment().format(DATE_FORMAT)}`.bgCyan} ✌️ |${'[SUCESS]'.green}| ${InfoMessage.magenta} ${info ?? ''}
        `)
    }
}