import { Role } from "../enums/role.enum";

export class CreateUsuarioDto {
    public readonly nombre: string;

    public readonly imagen: string;

    public readonly correo: string;

    public readonly password: string;

    public readonly role: Role;

}