import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tiendacategoria' })
export class TiendaCategoria {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'nombre' })
    public nombre: string;

    @Column({ name: 'imagen_path' })
    public imagen_path: string;

    @Column({ name: 'logo' })
    public logo: string;

    constructor(data: Partial<TiendaCategoria>) {
        Object.assign(this, data);
    }

}