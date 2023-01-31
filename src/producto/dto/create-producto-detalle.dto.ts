import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateProductoDetallesDto {
    @Expose()
    public readonly referencia: string;

    @Expose()
    public readonly corta_descripcion: string;

    @Expose()
    public readonly precio: number;

    @Expose()
    public readonly descuento: number;

    @Expose()
    public readonly cantidad: number;

    @Expose()
    public readonly producto_id: number;

    @Expose()
    public readonly marca_id: number;
}