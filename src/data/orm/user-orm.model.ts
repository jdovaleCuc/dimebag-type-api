import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "varchar", length: 100 })
  apellidos: string;

  @Column({ type: "varchar", length: 10 })
  tipo_identificacion: number;

  @Column({ type: "int", length: 20 })
  numero_identificacion: number;

  @Column("timestamp with local time zone")
  fecha_nacimiento: string;

  @Column({ type: "varchar", length: 1 })
  estado: string;

  @Column("json")
  atributos: object;
}
