import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateDeliveryZonasDto {
    @Expose()
    public readonly name: string;

    @Expose()
    public readonly peso_extra: number;

    @Expose()
    public readonly delivery_metodos_id: number;

}