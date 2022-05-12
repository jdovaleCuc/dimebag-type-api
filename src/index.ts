import express from 'express';
import http from 'http'
import morgan from 'morgan'
import colors from 'colors'
import AuthController from './controllers/auth.controller';
import { Controller } from './interfaces';
import UserController from './controllers/user.controller';
import text_formatter, { TYPES } from './utils/text_formatter';
import { config } from './config';

const app = express();
const port = config.port;
const _width = 60

const controllers: Controller[] = [
    new AuthController(),
    new UserController()
]

let MapControllers:string = ''

app.use(express.json())
app.use(morgan(`${'[PETICION HTTP]'.magenta} *************** :url :status :response-time ms *** ${':method'.green}`))

controllers.forEach((controller: Controller) => {
    app.use('/api/v1.0/', controller.router)
    MapControllers += `${'[Controller Added]'.magenta} -------------> ${controller.path} *** ${`${controller.name}`.yellow}\n`
});

const _httpServer = new http.Server(app)
const _topic = `
${colors.yellow(text_formatter.align_text(' Controllers ', TYPES._CENTER, '*'))}

${MapControllers}
${'='.repeat(_width)}
${text_formatter.align_text(`Servidor HTTP corriendo en puerto ${port}`,TYPES._CENTER)}
${colors.magenta(text_formatter.align_text("*".repeat(8)+'version @1.0.0'+"*".repeat(8), TYPES._CENTER))}

${colors.yellow(text_formatter.align_text('DIMEBAG WS', TYPES._CENTER))}
${'='.repeat(_width)}`;

_httpServer.listen(port, () => {
    console.log(_topic);
});


