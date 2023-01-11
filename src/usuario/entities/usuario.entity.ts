import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../enums/role.enum";
import { UsuarioStatusCode } from '../enums/user-status-code.enum';

@Entity({ name: 'usuario' })
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'correo', type: 'varchar', length: 150 })
    public correo: string;

    @Column({ name: 'password', type: 'varchar' })
    public password: string;

    @Column({ name: 'role', type: 'varchar', length: 50 })
    public role: Role;

    @Column({ name: 'imagen', type: 'varchar', length: 250 })
    public imagen: string;

    @Column({ name: 'usuario_status_id' })
    usuarioStatusCode: UsuarioStatusCode;

    // @ManyToOne(() => Usuario)
    // @JoinColumn({ name: 'usuario_status_id' })
    // public usuario: Usuario;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<Usuario>) {
        Object.assign(this, data);
    }

}

