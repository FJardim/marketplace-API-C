import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Producto } from '../../producto/entities/producto.entity';

@Entity({ name: 'producto_rating' })
export class ProductoRating {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'valor' })
    public valor: number;

    @Column({ name: 'id_producto' })
    public id_producto: number;

    @ManyToOne(() => Producto)
    @JoinColumn({ name: 'id_producto' })
    public producto: Producto;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<ProductoRating>) {
        Object.assign(this, data);
    }

}