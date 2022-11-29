import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Clientes } from '../../clientes/entities/clientes.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'clientes_rating' })
export class ClientesRating {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'id_cliente' })
    public id_cliente: number

    @ManyToOne(() => Clientes)
    @JoinColumn({ name: 'id_cliente' })
    public cliente: Clientes;

    @Column({ name: 'id_usuario' })
    public id_usuario: number

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario' })
    public usuario: Usuario;

    @Column({ name: 'valor' })
    public valor: number

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<ClientesRating>) {
        Object.assign(this, data);
    }
}