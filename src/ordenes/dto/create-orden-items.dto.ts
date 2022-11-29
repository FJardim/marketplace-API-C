import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateOrdenItemsDto {
    @Expose()
    public readonly cantidad: number;

    @Expose()
    public readonly id_producto: number;

    @Expose()
    public readonly nombre_producto: string;

    @Expose()
    public readonly imagen_producto: string;

    @Expose()
    public readonly precio_producto: number;

    @Expose()
    public readonly id_orden: number;

}