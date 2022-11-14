import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tienda' })
export class Tienda {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'telefono' })
    public telefono: string;

    @Column({ name: 'direccion' })
    public direccion: string;

    @Column({ name: 'logo' })
    public logo: string;

    @Column({ name: 'ubicacion' })
    public ubicacion: string;

    @Column({ name: 'facebook' })
    public facebook: string;

    @Column({ name: 'instagram' })
    public instagram: string;

    @Column({ name: 'twitter' })
    public twitter: string;

    @Column({ name: 'url' })
    public url: string;

    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updateAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deleteAt: Date;

    constructor(data: Partial<Tienda>) {
        Object.assign(this, data);
    }

}