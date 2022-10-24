import { NotFoundException } from "@nestjs/common";

export class AyudaNotFoundException extends NotFoundException {
    constructor() {
        super("Ayuda no encontrada");
    }

}