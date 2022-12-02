import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateDeliveryTypeMetodoDto {
    @Expose()
    public readonly codigo: string;

    @Expose()
    public readonly nombre: string;
}