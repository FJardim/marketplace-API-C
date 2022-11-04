import { NotFoundException } from "@nestjs/common";

export class UsuarioNotFoundException extends NotFoundException {
    constructor() {
        super("Usuario no encontrado");
    }

}