import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Marca } from '../../marca/entities/marca.entity';
import { Producto } from './producto.entity';

@Entity({ name: 'producto_detalles' })
export class ProductoDetalles {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'referencia' })
    public referencia: string;

    @Column({ name: 'corta_descripcion' })
    public corta_descripcion: string;

    @Column({ name: 'precio' })
    public precio: number;

    @Column({ name: 'descuento' })
    public descuento: number;

    @Column({ name: 'cantidad' })
    public cantidad: number;

    @Column({ name: 'producto_id' })
    public producto_id: number;

    @OneToOne(() => Producto)
    @JoinColumn({ name: 'producto_id' })
    public producto: Producto;

    @Column({ name: 'marca_id' })
    public marca_id: number;

    @ManyToOne(() => Marca)
    @JoinColumn({ name: 'marca_id' })
    public marca: Marca;

    constructor(data: Partial<ProductoDetalles>) {
        Object.assign(this, data);
    }

}