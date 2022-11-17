import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tienda } from '../../tienda/entities/tienda.entity';

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

    @Column({ name: 'precio' })
    public precio: number;

    @Column({ name: 'descuento' })
    public descuento: number;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    constructor(data: Partial<Producto>) {
        Object.assign(this, data);
    }

}