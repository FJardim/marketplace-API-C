import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'categoria' })
export class Category {
  @PrimaryGeneratedColumn({ name: 'id' })
  public readonly id: number;

  @Column({ name: 'nombre' })
  public nombre: string;

  @Column({ name: 'img_categoria' })
  public imgCategoria: string;

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