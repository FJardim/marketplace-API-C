import { Ordenes } from 'src/ordenes/entities/ordenes.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'delivery_notas' })
export class DeliveryNotas {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'url' })
    public url: string;

    @Column({ name: 'orden_id' })
    public orden_id: number;

    @ManyToOne(() => Ordenes)
    @JoinColumn({ name: 'orden_id' })
    public ordenes: Ordenes;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<DeliveryNotas>) {
        Object.assign(this, data);
    }
}