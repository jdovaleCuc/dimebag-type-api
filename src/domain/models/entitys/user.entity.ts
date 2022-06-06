import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Identifiers } from "./indentifier.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "varchar", length: 100 })
  apellidos: string;

  @ManyToOne(() => Identifiers, (indentifier: Identifiers) => indentifier.id, {
    nullable: false,
  })
  tipo_identificacion: Identifiers;

  @Column({ type: "int" })
  numero_identificacion: number;

  @Column("date")
  fecha_nacimiento: string;

  @Column({ default: false })
  estado: boolean;

  @Column({ type: "json", nullable: true })
  atributos: object;
}
