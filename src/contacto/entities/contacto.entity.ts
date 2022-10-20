import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'contacto' })
export class Contacto {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'asunto' })
    public asunto: string;

    @Column({ name: 'correo' })
    public correo: string;

    @Column({ name: 'descripcion' })
    public descripcion: string;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<Contacto>) {
        Object.assign(this, data);
    }

}