import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateDeliveryNotasDto {
    @Expose()
    public readonly numero_rastreo: number;

    @Expose()
    public readonly url: string;

    @Expose()
    public readonly orden_id: number;

}