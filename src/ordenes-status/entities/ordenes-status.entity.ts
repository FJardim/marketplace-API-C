import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'orden_status' })
export class OrdenesStatus {
    @PrimaryGeneratedColumn({ name: 'codigo' })
    public readonly codigo: string;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'color' })
    public color: string;

    @Column({ name: 'notificacion_mensaje' })
    public notificacion_mensaje: string;

    constructor(data: Partial<OrdenesStatus>) {
        Object.assign(this, data);
    }

}