import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

@Exclude()
export class RegisterClientDto {
    @Expose()
    @IsString()
    @MaxLength(250)
    @MinLength(2)
    readonly nombre: string;

    @Expose()
    @IsString()
    @MaxLength(250)
    @MinLength(2)
    readonly apellido: string;

    @Expose()
    @IsEmail()
    @MaxLength(150)
    readonly correo: string;

    @Expose()
    @IsString()
    @MinLength(8)
    readonly password: string;
}