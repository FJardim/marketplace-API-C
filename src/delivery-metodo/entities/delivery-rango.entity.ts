import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DeliveryTypeMetodo } from '../../delivery-type-metodo/entities/delivery-type-metodo.entity';

@Entity({ name: 'delivery_rangos' })
export class DeliveryRangos {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'min_producto' })
    public min_producto: number;

    @Column({ name: 'max_producto' })
    public max_producto: number;

    @Column({ name: 'posicion' })
    public posicion: number;

    @Column({ name: 'delivery_metodos' })
    public delivery_metodos: number;

    @ManyToOne(() => DeliveryTypeMetodo)
    @JoinColumn({ name: 'delivery_metodos' })
    public deliveryTypeMetodo: DeliveryTypeMetodo;

    constructor(data: Partial<DeliveryRangos>) {
        Object.assign(this, data);
    }
}