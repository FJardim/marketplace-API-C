import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MetodoPagoCodigo } from '../enums/metodo-pago-codigo';

@Entity({ name: 'metodo_pago' })
export class MetodoPago {
    @PrimaryGeneratedColumn({ name: 'codigo' })
    public readonly codigo: MetodoPagoCodigo;

    @Column({ name: 'nombre' })
    public nombre: string

    @Column({ name: 'activo' })
    public acivo: string

    constructor(data: Partial<MetodoPago>) {
        Object.assign(this, data);
    }

}