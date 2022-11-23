import { Exclude, Expose } from "class-transformer";
import { MaxLength, MinLength } from "class-validator";

@Exclude()
export class CreateOrdenesDto {
    @Expose()
    public readonly numero: number;

    @Expose()
    public readonly fecha: Date;

    @Expose()
    public readonly idClientes: number;

    @Expose()
    public readonly metodoPagoID: number;

    @Expose()
    public readonly status: string;

}