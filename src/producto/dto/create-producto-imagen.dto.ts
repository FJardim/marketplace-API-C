import { Exclude, Expose } from "class-transformer";
import { MaxLength, MinLength } from "class-validator";

@Exclude()
export class CreateProductoImagenDto {

    @Expose()
    @MaxLength(350)
    @MinLength(2)
    public readonly path: string;

    @Expose()
    public readonly producto_id: number;

    @Expose()
    public readonly posicion: number;
}
