import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Clientes } from '../../clientes/entities/clientes.entity';

@Entity({ name: 'ordenes' })
export class Ordenes {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'numero' })
    public numero: number;

    @Column({ name: 'fecha' })
    public fecha: Date;

    @Column({ name: 'id_clientes' })
    public idClientes: number;

    // @OneToOne(() => Clientes)
    // @JoinColumn({ name: 'id_clientes' })
    // public clientes: Clientes;

    @Column({ name: 'metodo_pago_id' })
    public metodoPagoID: number;

    // @OneToOne(() => MetodosPagos)
    // @JoinColumn({ name: 'metodo_pago_id' })
    // public metodosPagos: MetodosPagos;

    @Column({ name: 'status' })
    public status: string;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<Ordenes>) {
        Object.assign(this, data);
    }

}