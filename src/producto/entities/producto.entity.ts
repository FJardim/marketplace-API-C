import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tienda } from '../../tienda/entities/tienda.entity';
import { ProductoImagen } from './producto-imagen.entity';
import { ProductoDetalles } from './producto-detalle.entity';

@Entity({ name: 'producto' })
export class Producto {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'descripcion' })
    public descripcion: string;

    @Column({ name: 'tiendas_id' })
    public tiendas_id: number;

    @ManyToOne(() => Tienda)
    @JoinColumn({ name: 'tiendas_id' })
    public tienda: Tienda;

    @Column({ name: 'rating' })
    public rating: number;

    @OneToMany(() => ProductoImagen, productoImagen => productoImagen.producto)
    public productoImagenes: ProductoImagen[];

    @OneToOne(() => ProductoDetalles, productoDetalles => productoDetalles.producto)
    public productoDetalles: ProductoDetalles[];

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<Producto>) {
        Object.assign(this, data);
    }

}