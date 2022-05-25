import { Entity } from "typeorm";

@Entity()
export class User {
  id: number;
  nombre: string;
  apellidos: string;
  tipo_identificacion: number;
  fecha_nacimiento: string;
  estado: string;
  atributos: object;
}
