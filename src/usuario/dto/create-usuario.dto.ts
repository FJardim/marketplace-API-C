import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { Role } from "../enums/role.enum";

@Exclude()
export class CreateUsuarioDto {
    @Expose()
    @IsEmail()
    @MaxLength(150)
    public readonly correo: string;

    @Expose()
    @IsString()
    @MinLength(8)
    public readonly password: string;

    @Expose()
    public readonly role: Role;

    @Expose()
    @MinLength(8)
    public readonly imagen: string;

    @Expose()
    public readonly usuario_status_id: string;
}