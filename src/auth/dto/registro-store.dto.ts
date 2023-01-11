import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

@Exclude()
export class RegisterStoreDto {
    @Expose()
    @IsString()
    @MaxLength(250)
    @MinLength(2)
    readonly nombre: string;

    @Expose()
    @IsEmail()
    @MaxLength(150)
    readonly correo: string;

    @Expose()
    @IsString()
    @MinLength(8)
    readonly password: string;

    @Expose()
    @IsString()
    @MaxLength(250)
    @MinLength(6)
    readonly telefono: string;

    @Expose()
    @MaxLength(150)
    readonly direccion: string;

    @Expose()
    @IsString()
    @MinLength(8)
    readonly ubicacion: string;

    @Expose()
    @IsString()
    @MinLength(8)
    readonly facebook: string;

    @Expose()
    @IsString()
    @MinLength(8)
    readonly instagram: string;

    @Expose()
    @IsString()
    @MinLength(8)
    readonly twitter: string;

    @Expose()
    @IsString()
    @MinLength(8)
    readonly url: string;

    @Expose()
    readonly rating: number;
}