import { Exclude, Expose } from "class-transformer";
import { Role } from "../enums/role.enum";

@Exclude()
export class CreateUsuarioDto {
    @Expose()
    public readonly correo: string;

    @Expose()
    public readonly password: string;

    @Expose()
    public readonly role: Role;

    @Expose()
    public readonly imagen: string;
}