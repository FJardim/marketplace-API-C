import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Clientes } from '../../clientes/entities/clientes.entity';
import { Producto } from '../../producto/entities/producto.entity';

@Entity({ name: 'favorito' })
export class Favorito {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'producto_id' })
    public productoId: number;

    @ManyToMany(() => Producto)
    @JoinColumn({ name: 'producto_id' })
    public producto: Producto;

    @Column({ name: 'cliente_id' })
    public clienteId: number;

    @ManyToMany(() => Clientes)
    @JoinColumn({ name: 'cliente_id' })
    public clientes: Clientes;

    constructor(data: Partial<Favorito>) {
        Object.assign(this, data);
    }

}