import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeliveryTypeMetodo } from '../../delivery-type-metodo/entities/delivery-type-metodo.entity';
import { Tienda } from '../../tienda/entities/tienda.entity';

@Entity({ name: 'delivery_metodos' })
export class DeliveryMetodo {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'descripcion' })
    public descripcion: string;

    @Column({ name: 'delivery_metodo_type_codigo' })
    public delivery_metodo_type_codigo: string;

    @ManyToOne(() => DeliveryTypeMetodo)
    @JoinColumn({ name: 'delivery_metodo_type_codigo' })
    public deliveryTypeMetodo: DeliveryTypeMetodo;

    @Column({ name: 'id_tienda' })
    public id_tienda: string;

    @ManyToOne(() => Tienda)
    @JoinColumn({ name: 'id_tienda' })
    public tienda: Tienda;

    @Column({ name: 'imagen_path' })
    public imagen_path: string;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<DeliveryMetodo>) {
        Object.assign(this, data);
    }
}