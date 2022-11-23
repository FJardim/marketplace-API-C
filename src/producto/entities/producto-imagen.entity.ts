import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Producto } from "./producto.entity";

@Entity({ name: 'producto_imagen' })
export class ProductoImagen {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'path' })
    public path: string;

    @Column({ name: 'producto_id' })
    public producto_id: number;

    @ManyToOne(() => Producto)
    @JoinColumn({ name: 'producto_id' })
    public producto: Producto;

    @Column({ name: 'posicion' })
    public posicion: number;

    constructor(data: Partial<ProductoImagen>) {
        Object.assign(this, data);
    }

}
