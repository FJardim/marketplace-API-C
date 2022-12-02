import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateDeliveryMetodoDto {
    @Expose()
    public readonly nombre: string;

    @Expose()
    public readonly descripcion: string;

    @Expose()
    public readonly delivery_metodo_type: string;

    @Expose()
    public readonly id_tienda: string;

    @Expose()
    public readonly imagen_path: string;

}