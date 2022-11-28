import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateOrdenesDto {
    @Expose()
    public readonly numero_orden: number;

    @Expose()
    public readonly fecha: Date;

    @Expose()
    public readonly orden_status: string;

    @Expose()
    public readonly id_tienda: number;

    @Expose()
    public readonly id_usuario: number;

    @Expose()
    public readonly codigo_metodo_pago: string;

    @Expose()
    public readonly total: number;

}