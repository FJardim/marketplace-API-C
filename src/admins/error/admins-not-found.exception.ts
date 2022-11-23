import { NotFoundException } from "@nestjs/common";

export class AdministradorNotFoundException extends NotFoundException {
    constructor() {
        super("Administrador no encontrado");
    }

}