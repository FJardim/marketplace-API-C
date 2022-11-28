import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from '../../producto/entities/producto.entity';
import { Category } from '../../categories/entities/category.entity';

@Entity({ name: 'producto_categoria' })
export class ProductoCategoria {
    @PrimaryGeneratedColumn({ name: 'id' })
    public readonly id: number;

    @Column({ name: 'producto_id' })
    public producto_id: number;

    @ManyToOne(() => Producto)
    @JoinColumn({ name: 'producto_id' })
    public producto: Producto;

    @Column({ name: 'categoria_id' })
    public categoria_id: number;

    @ManyToOne(() => Category)
    @JoinColumn({ name: 'categoria_id' })
    public categoria: Category;

    constructor(data: Partial<ProductoCategoria>) {
        Object.assign(this, data);
    }

}