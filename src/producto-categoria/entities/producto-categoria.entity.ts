import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from '../../producto/entities/producto.entity';
import { Category } from '../../categories/entities/category.entity';

@Entity({ name: 'producto_categoria' })
export class ProductoCategoria {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'producto_id' })
    public producto_id: number;

    @ManyToMany(() => Producto)
    @JoinColumn({ name: 'id_producto' })
    public producto: Producto;

    @Column({ name: 'categoria_id' })
    public categoria_id: number;

    @ManyToMany(() => Category)
    @JoinColumn({ name: 'id_categoria' })
    public categoria: Category;

    constructor(data: Partial<ProductoCategoria>) {
        Object.assign(this, data);
    }

}