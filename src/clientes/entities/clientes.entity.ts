import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: 'clientes' })
export class Clientes {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'apellido' })
    public apellido: string;

    @Column({ name: 'telefono' })
    public telefono: string;

    @Column({ name: 'imagen' })
    public imagen: string;

    @Column({ name: 'instagram' })
    public instagram: string;

    @Column({ name: 'paypal' })
    public paypal: string;

    @Column({ name: 'correo' })
    public correo: string;

    @Column({ name: 'direccion' })
    public direccion: string;

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

    constructor(data: Partial<Clientes>) {
        Object.assign(this, data);
    }

}