import { NotFoundException } from "@nestjs/common";

export class ProductoNoEncontrado extends NotFoundException {
    constructor() {
        super("Producto no encontrado");
    }

}