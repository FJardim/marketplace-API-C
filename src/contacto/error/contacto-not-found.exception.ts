import { NotFoundException } from "@nestjs/common";

export class ContactoNotFoundException extends NotFoundException {
    constructor() {
        super("Contacto no encontrado");
    }

}