import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'admins' })
export class Admins {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'phonombre' })
    public phonombre: string;

    @Column({ name: 'apellido' })
    public apellido: string;

    @Column({ name: 'imagen_perfil' })
    public imagen_perfil: string;

    @Column({ name: 'id_usuario' })
    public id_usuario: number;

    @OneToOne(() => Usuario)
    @JoinColumn({ name: 'id_usuario' })
    public usuario: Usuario;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<Admins>) {
        Object.assign(this, data);
    }

}