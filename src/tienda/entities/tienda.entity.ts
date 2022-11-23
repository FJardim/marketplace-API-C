import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuario } from '../../usuario/entities/usuario.entity';
import { TiendaCategoria } from './tienda-categoria.entity';

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

    @Column({ name: 'tienda_categoria_id' })
    public tienda_categoria_id: number;

    @ManyToOne(() => TiendaCategoria)
    @JoinColumn({ name: 'tienda_categoria_id' })
    public tiendaCategoria: TiendaCategoria;

    @Column({ name: 'usuario_id' })
    public usuario_id: number;

    @OneToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    public usuario: Usuario;

    @Column({ name: 'rating' })
    public rating: number;

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