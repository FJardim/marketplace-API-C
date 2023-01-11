import { Exclude, Expose } from 'class-transformer';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@Exclude()
export class LoginAuthDto {
    @Expose()
    @IsEmail()
    readonly correo: string;

    @Expose()
    @MinLength(4)
    @MaxLength(12)
    readonly password: string;
}