import { NotFoundException } from "@nestjs/common";

export class TiendaNoEncontrada extends NotFoundException {
    constructor() {
        super(" Tienda no encontrada");
    }

}