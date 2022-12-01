import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { NotificacionTypes } from '../enums/notificacion-types.enum';

@Entity({ name: 'notificacion' })
export class Notificacion {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'mensaje' })
    public mensaje: string;

    @Column({ name: 'type' })
    public type: NotificacionTypes;

    @Column({ name: 'date' })
    public date: Date;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<Notificacion>) {
        Object.assign(this, data);
    }

}