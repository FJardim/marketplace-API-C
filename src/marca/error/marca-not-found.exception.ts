import { NotFoundException } from "@nestjs/common";

export class MarcaNotFoundException extends NotFoundException {
    constructor() {
        super("Marca no encontrada");
    }

}