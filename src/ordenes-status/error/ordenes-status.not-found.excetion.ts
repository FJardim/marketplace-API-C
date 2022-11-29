import { NotFoundException } from "@nestjs/common";

export class OrdenesStatusNoEncontrada extends NotFoundException {
    constructor() {
        super(" Estado de la orden no encontrado");
    }

}