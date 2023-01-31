import { Exclude, Expose } from "class-transformer";
import { MaxLength, MinLength } from "class-validator";


@Exclude()
export class CreateProductoDto {
    @Expose()
    @MaxLength(250)
    @MinLength(2)
    public readonly nombre: string;

    @Expose()
    @MaxLength(350)
    @MinLength(50)
    public readonly descripcion: string;

    @Expose()
    public readonly tiendas_id: number;

    @Expose()
    public readonly categoria_ids: number[];

    @Expose()
    public readonly rating: number;

}