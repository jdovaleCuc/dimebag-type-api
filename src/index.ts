import colors from "colors";
import app from "./app/app";
import CreateServer from "./app/config/server";
import MessagesSocket from "./infrastructure/libs/socket/messages.socket";
import socket from "./infrastructure/libs/socket/socket";
/* import { InitDb } from '../src/data/data-source'
import PostgressDataSource from "./data/data-source/postgres/data.source"; */
import text_formatter, { TYPES } from "./infrastructure/utils/text_formatter";

export default async function Main(): Promise<void> {
  /*
  ** Creando server 
  */
  const server = CreateServer(app);
  const io = socket.getInstance(server)
  io.initializeHandlers([{ path: '/messages', handler: new MessagesSocket() }])

  const _topic = `
${colors.yellow(text_formatter.align_text(" Controllers ", TYPES._CENTER, "*"))}

${"=".repeat(60)}
${text_formatter.align_text(`Servidor HTTP corriendo en puerto ${8080}`, TYPES._CENTER)}
${colors.magenta(text_formatter.align_text("*".repeat(8) + "version @1.0.0" + "*".repeat(8), TYPES._CENTER))}

${colors.yellow(text_formatter.align_text("DIMEBAG WS", TYPES._CENTER))}
${"=".repeat(60)}`;

  server.listen(8080, () => { console.log(_topic); });
}

Main();
