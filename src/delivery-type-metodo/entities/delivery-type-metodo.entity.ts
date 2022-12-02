import { Column, Entity, PrimaryGeneratedColumn }
    from 'typeorm';

@Entity({ name: 'delivery_type_metodo' })
export class DeliveryTypeMetodo {
    @PrimaryGeneratedColumn({ name: 'codigo' })
    public readonly codigo: string;

    @Column({ name: 'nombre' })
    public nombre: string;

    constructor(data: Partial<DeliveryTypeMetodo>) {
        Object.assign(this, data);
    }
}