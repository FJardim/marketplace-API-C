import { NotFoundException } from "@nestjs/common";

export class TiendaRatingNoEncontrada extends NotFoundException {
    constructor() {
        super(" Rating no encontrado");
    }

}