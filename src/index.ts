import express, { Router } from 'express';
import morgan from 'morgan'
import colors from 'colors'
import AuthController from './controllers/auth.controller';
import { Controller } from './interfaces';

const app = express();
const port = 8080;

const controllers: Controller[] = [
    new AuthController(),
]

let MapControllers:string = ''

controllers.forEach((controller) => {
    app.use(controller.router)
    MapControllers += `${'[Controller Added]'.magenta} -------------> /${controller.path} *** ${`${controller.name}`.yellow}\n`
})

app.use(morgan(`${'[PETICION HTTP]'.magenta} *************** :url :status :response-time ms *** ${':method'.green}`))

app.listen(port, () => {

    console.log(`
${'*'.repeat(21)} ${'Controllers'.yellow} ${'*'.repeat(21)}

${MapControllers}
${'-'.repeat(55)}
       Servidor HTTP corriendo en puerto ${colors.bold(`${port}`.magenta)}
       ${'*'.repeat(11)} ${colors.bold.magenta('version @1.0.0')} ${'*'.repeat(11)}

       ${colors.yellow('              DIMEBAG WS              ')}
${'-'.repeat(55)}
    `)
});
