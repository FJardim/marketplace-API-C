import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Producto } from "./producto.entity";
import { Marca } from '../../marca/entities/marca.entity';

@Entity({ name: 'producto_detalles' })
export class ProductoDetalles {
    @PrimaryGeneratedColumn({ name: 'id_producto' })
    public readonly id_producto: number;

    @Column({ name: 'referencia' })
    public referencia: string;

    @Column({ name: 'corta_descripcion' })
    public corta_descripcion: string;

    @Column({ name: 'precio' })
    public precio: number;

    @Column({ name: 'cantidad' })
    public cantidad: number;

    @Column({ name: 'marca_id' })
    public marca_id: number;

    @ManyToOne(() => Marca)
    @JoinColumn({ name: 'marca_id' })
    public marca: Marca;

    constructor(data: Partial<ProductoDetalles>) {
        Object.assign(this, data);
    }

}