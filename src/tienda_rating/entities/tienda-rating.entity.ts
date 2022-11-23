import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tienda_rating' })
export class TiendaRating {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'valor' })
    public valor: number;

    @Column({ name: 'id_tiendas' })
    public id_tiendas: number;

    @ManyToOne(() => TiendaRating)
    @JoinColumn({ name: 'id_tiendas' })
    public TiendaRating: TiendaRating;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<TiendaRating>) {
        Object.assign(this, data);
    }

}