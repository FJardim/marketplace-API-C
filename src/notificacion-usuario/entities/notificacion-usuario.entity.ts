import { Notificacion } from "src/notificacion/entities/notificacion.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'notificacion_usuario' })
export class NotificacionUsuario {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'id_usuario' })
    public id_usuario: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario' })
    public usuario: Usuario;

    @Column({ name: 'id_notificacion' })
    public id_notificacion: number;

    @ManyToOne(() => Notificacion)
    @JoinColumn({ name: 'id_notificacion' })
    public notificacion: Notificacion;

    @Column({ name: 'ver' })
    public ver: string;

    constructor(data: Partial<NotificacionUsuario>) {
        Object.assign(this, data);
    }

}