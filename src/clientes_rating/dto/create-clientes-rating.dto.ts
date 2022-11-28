import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateClientesRatingDto {
    @Expose()
    public readonly id_cliente: number;

    @Expose()
    public readonly id_usuario: number;

    @Expose()
    public readonly valor: number;

}
