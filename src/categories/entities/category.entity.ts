import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tienda } from '../../tienda/entities/tienda.entity';

@Entity({ name: 'categoria' })
export class Category {
  @PrimaryGeneratedColumn({ name: 'id' })
  public readonly id: number;

  @Column({ name: 'nombre' })
  public nombre: string;

  @Column({ name: 'img_categoria' })
  public imgCategoria: string;

  @Column({ name: 'id_tienda' })
  public idtienda: number;

  @ManyToOne(() => Tienda)
  @JoinColumn({ name: 'id_tienda' })
  public tienda: Tienda;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updateAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deleteAt: Date;

  constructor(data: Partial<Category>) {
    Object.assign(this, data);
  }

}