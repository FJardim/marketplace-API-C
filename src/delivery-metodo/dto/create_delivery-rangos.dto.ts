import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateDeliveryRangosDto {
    @Expose()
    public readonly min_producto: number;

    @Expose()
    public readonly max_producto: number;

    @Expose()
    public readonly posicion: number;

    @Expose()
    public readonly delivery_metodos: number;

}