import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Clientes } from '../../clientes/entities/clientes.entity';

@Entity({ name: 'producto' })
export class Producto {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'descripcion' })
    public descripcion: string;

    @Column({ name: 'precio' })
    public precio: string;

    @Column({ name: 'descuento' })
    public descuento: string;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    constructor(data: Partial<Producto>) {
        Object.assign(this, data);
    }

}