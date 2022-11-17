import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'publicidad' })
export class Publicidad {
  @PrimaryGeneratedColumn({ name: 'id' })
  public readonly id: number;

  @Column({ name: 'nombre' })
  public nombre: string;

  @Column({ name: 'texto' })
  public texto: string;

  @Column({ name: 'imagen' })
  public imagen: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updateAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deleteAt: Date;

  constructor(data: Partial<Publicidad>) {
    Object.assign(this, data);
  }

}
