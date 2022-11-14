import { NotFoundException } from "@nestjs/common";

export class ProductoImagenNoEncontrado extends NotFoundException {
    constructor() {
        super("Imagen del Prodcuto no encontrada");
    }

}