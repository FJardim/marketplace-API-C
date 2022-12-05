import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DeliveryTypeMetodo } from '../../delivery-type-metodo/entities/delivery-type-metodo.entity';
import { DeliveryRangos } from "./delivery-rango.entity";
import { DeliveryZonas } from './delivery-zonas.entity';

@Entity({ name: 'delivery_zona_de_rango' })
export class DeliveryZonaRangos {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'precio' })
    public precio: number;

    @Column({ name: 'delivery_rango_id' })
    public delivery_rango_id: number;

    @ManyToOne(() => DeliveryRangos)
    @JoinColumn({ name: 'delivery_rango_id' })
    public deliveryRango: DeliveryRangos;

    @Column({ name: 'delivery_zona_id' })
    public delivery_zona_id: number;

    @ManyToOne(() => DeliveryZonas)
    @JoinColumn({ name: 'delivery_zona_ids' })
    public deliveryZonas: DeliveryZonas;

    constructor(data: Partial<DeliveryZonaRangos>) {
        Object.assign(this, data);
    }
}