
import { Exclude, Expose } from "class-transformer";
import { IsEmail, MaxLength, MinLength } from "class-validator";


@Exclude()
export class CreateClientesDto {
    @Expose()
    @MaxLength(250)
    @MinLength(2)
    public readonly nombre: string;

    @Expose()
    @MaxLength(250)
    @MinLength(12)
    public readonly telefono: string;

    @Expose()
    public readonly imagen: string;

    @Expose()
    @MaxLength(250)
    @MinLength(2)
    public readonly instagram: string;

    @Expose()
    @MaxLength(250)
    @MinLength(10)
    @IsEmail()
    public readonly paypal: string;

    @Expose()
    @IsEmail()
    @MaxLength(150)
    public readonly correo: string;

    @Expose()
    @MaxLength(250)
    @MinLength(4)
    public readonly direccion: string;

    @Expose()
    public readonly id_usuario: number;

}