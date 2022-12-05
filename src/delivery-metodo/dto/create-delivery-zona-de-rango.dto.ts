import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateDeliveryZonasRangosDto {
    @Expose()
    public readonly precio: number;

    @Expose()
    public readonly delivery_rango_id: number;

    @Expose()
    public readonly delivery_zona_id: number;

}