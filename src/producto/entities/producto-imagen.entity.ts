import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity({ name: 'productoImagen' })
export class ProductoImagen {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'path' })
    public path: string;

    @Column({ name: 'producto_id' })
    public productoId: number;

    @ManyToOne(() => Producto)
    @JoinColumn({ name: 'producto_id' })
    public producto: Producto;

    constructor(data: Partial<ProductoImagen>) {
        Object.assign(this, data);
    }

}
