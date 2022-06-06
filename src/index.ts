import colors from "colors";
import app from "./app/app";
import CreateServer from "./app/config/server";
import { InitDb } from '../src/data/data-source'
import PostgressDataSource from "./data/data-source/postgres/data.source";
import text_formatter, { TYPES } from "./infrastructure/utils/text_formatter";

export default async function Main(): Promise<void> {
  /*
  ** Inicializando base de datos 
  */
  await InitDb(PostgressDataSource)
  /*
  ** Creando server 
  */
  const server = CreateServer(app);

  const _topic = `
${colors.yellow(text_formatter.align_text(" Controllers ", TYPES._CENTER, "*"))}

${"=".repeat(60)}
${text_formatter.align_text(`Servidor HTTP corriendo en puerto ${8080}`,TYPES._CENTER)}
${colors.magenta(text_formatter.align_text("*".repeat(8) + "version @1.0.0" + "*".repeat(8),TYPES._CENTER))}

${colors.yellow(text_formatter.align_text("DIMEBAG WS", TYPES._CENTER))}
${"=".repeat(60)}`;

  server.listen(8080, () => {console.log(_topic);});
}

Main();
