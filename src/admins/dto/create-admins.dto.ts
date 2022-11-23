
import { Exclude, Expose } from "class-transformer";
import { MaxLength, MinLength } from "class-validator";


@Exclude()
export class CreateAdminsDto {
    @Expose()
    @MaxLength(250)
    @MinLength(2)
    public readonly nombre: string;

    @Expose()
    @MaxLength(250)
    @MinLength(11)
    public readonly phonombre: string;

    @Expose()
    @MaxLength(250)
    @MinLength(2)
    public readonly apellido: string;

    @Expose()
    @MaxLength(250)
    @MinLength(2)
    public readonly imagen_perfil: string;

    @Expose()
    public readonly id_usuario: number;


}