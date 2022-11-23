import { Exclude, Expose } from "class-transformer";
import { IsUrl } from "class-validator";

@Exclude()
export class CreateTiendaCategoriaDto {
    @Expose()
    public nombre: string;

    @Expose()
    public imagen_path: string;

    @Expose()
    public logo: string;
}