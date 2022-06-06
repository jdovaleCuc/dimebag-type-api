import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Identifiers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 5 })
  descripcion: string;

  @Column("boolean")
  activo: boolean;

  @OneToMany(() => User, (user: User) => user.tipo_identificacion)
  users: User[]
}
