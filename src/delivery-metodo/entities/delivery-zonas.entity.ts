import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeliveryMetodo } from './delivery-metodo.entity';

@Entity({ name: 'delivery_zonas' })
export class DeliveryZonas {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'peso_extra' })
    public peso_extra: number;

    @Column({ name: 'delivery_metodos_id' })
    public delivery_metodos_id: number;

    @ManyToOne(() => DeliveryMetodo)
    @JoinColumn({ name: 'delivery_metodos_id' })
    public deliveryMetodo: DeliveryMetodo;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<DeliveryZonas>) {
        Object.assign(this, data);
    }
}