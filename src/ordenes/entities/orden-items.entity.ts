import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Producto } from '../../producto/entities/producto.entity';
import { Ordenes } from "./ordenes.entity";

@Entity({ name: 'orden_items' })
export class OrdenItems {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'cantidad' })
    public cantidad: number;

    @Column({ name: 'id_producto' })
    public id_producto: number;

    @ManyToOne(() => Producto)
    @JoinColumn({ name: 'id_producto' })
    public producto: Producto;

    @Column({ name: 'nombre_producto' })
    public nombre_producto: string;

    @Column({ name: 'imagen_producto' })
    public imagen_producto: string;

    @Column({ name: 'precio_producto' })
    public precio_producto: number;

    @Column({ name: 'id_orden' })
    public id_orden: number;

    @ManyToOne(() => Ordenes)
    @JoinColumn({ name: 'id_orden' })
    public orden: Ordenes;

    constructor(data: Partial<OrdenItems>) {
        Object.assign(this, data);
    }

}