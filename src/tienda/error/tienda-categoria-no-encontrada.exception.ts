import { NotFoundException } from "@nestjs/common";

export class TiendaCategoriaNoEncontrada extends NotFoundException {
    constructor() {
        super(" Tienda Categoria no encontrada");
    }

}