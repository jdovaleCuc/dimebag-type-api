import logger from "../../infrastructure/utils/logger";
import { DataSource } from "typeorm";

/*
** Permite establecer conexion con base de datos
** Detiene proceso si no logra conectarse
*/
export async function InitDb(DataSource: DataSource): Promise<void> {
  try {
    await DataSource.initialize();
    logger.onSucess('Conexion establecida con base de datos')
  } catch (error) { 
    logger.OnError('Error al conectar con db: '+error);
    process.exit(1) 
  }
}
  