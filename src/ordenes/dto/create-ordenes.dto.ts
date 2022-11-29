import { Exclude, Expose } from "class-transformer";
import { MetodoPagoCodigo } from '../../metodo-pago/enums/metodo-pago-codigo';

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
    public readonly codigo_metodo_pago: MetodoPagoCodigo;

    @Expose()
    public readonly total: number;

}