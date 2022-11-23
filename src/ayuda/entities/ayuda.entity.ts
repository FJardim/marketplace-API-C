import { Topico } from 'src/topico/entities/topico.entity';
import {
  Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn,
} from 'typeorm';

@Entity({ name: 'ayuda' })
export class Ayuda {
  @PrimaryGeneratedColumn({ name: 'id' })
  public readonly id: number;

  @Column({ name: 'titulo' })
  public titulo: string;

  @Column({ name: 'descripcion' })
  public descripcion: string;

  @Column({ name: 'id_topico' })
  public id_topico: number;

  @ManyToOne(() => Topico)
  @JoinColumn({ name: 'id_topico' })
  public topico: Topico;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updateAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deleteAt: Date;

  constructor(data: Partial<Ayuda>) {
    Object.assign(this, data);
  }
}
