import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateProductoRatingDto {
    @Expose()
    public readonly valor: number;

    @Expose()
    public readonly id_producto: number;

}