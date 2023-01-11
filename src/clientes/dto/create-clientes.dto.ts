
import { Exclude, Expose } from "class-transformer";
import { IsEmail, MaxLength, MinLength } from "class-validator";


@Exclude()
export class CreateClientesDto {
    @Expose()
    public readonly nombre: string;

    @Expose()
    public readonly apellido: string;

    @Expose()
    public readonly telefono: string;

    @Expose()
    public readonly imagen: string;

    @Expose()
    public readonly instagram: string;

    @Expose()
    public readonly paypal: string;

    @Expose()
    public readonly correo: string;

    @Expose()
    public readonly direccion: string;

    @Expose()
    public readonly id_usuario: number;

}