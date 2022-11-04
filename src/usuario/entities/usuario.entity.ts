import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../enums/role.enum";

@Entity({ name: 'usuario' })
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'correo' })
    public correo: string;

    @Column({ name: 'password' })
    public password: string;

    @Column({ name: 'roles' })
    public role: Role;

    @Column({ name: 'imagen' })
    public imagen: string;

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

