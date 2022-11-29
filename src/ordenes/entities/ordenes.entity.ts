import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Tienda } from '../../tienda/entities/tienda.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { MetodoPagoCodigo } from '../../metodo-pago/enums/metodo-pago-codigo';
import { MetodoPago } from '../../metodo-pago/entities/metodo-pago.entity';
import { OrdenItems } from './orden-items.entity';

@Entity({ name: 'ordenes' })
export class Ordenes {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'numero_orden' })
    public numero_orden: number;

    @Column({ name: 'fecha' })
    public fecha: Date;

    @Column({ name: 'orden_status' })
    public orden_status: string;

    @Column({ name: 'id_tienda' })
    public id_tienda: number;

    @ManyToOne(() => Tienda)
    @JoinColumn({ name: 'id_tienda' })
    public tienda: Tienda;

    @Column({ name: 'id_usuario' })
    public id_usuario: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario' })
    public usuario: Usuario;

    @Column({ name: 'codigo_metodo_pago' })
    public codigo_metodo_pago: MetodoPagoCodigo;

    @ManyToOne(() => MetodoPago)
    @JoinColumn({ name: 'codigo_metodo_pago' })
    public metodoPago: MetodoPago;

    @OneToMany(() => OrdenItems, orderItem => orderItem.orden)
    public ordenItems: OrdenItems[];

    @Column({ name: 'total' })
    public total: number;

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