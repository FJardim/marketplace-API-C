import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from '../../producto/entities/producto.entity';
import { Clientes } from '../../clientes/entities/clientes.entity';
import { Tienda } from '../../tienda/entities/tienda.entity';

@Entity({ name: 'favoritos_tienda' })
export class FavoritoTienda {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'tienda_id' })
    public tiendaId: number;

    @ManyToMany(() => Tienda)
    @JoinColumn({ name: 'tienda_id' })
    public tienda: Tienda;

    @Column({ name: 'cliente_id' })
    public clienteId: number;

    @ManyToMany(() => Clientes)
    @JoinColumn({ name: 'cliente_id' })
    public Clientes: Clientes;

    constructor(data: Partial<FavoritoTienda>) {
        Object.assign(this, data);
    }

}