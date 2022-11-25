import { NotFoundException } from "@nestjs/common";

export class ProductoCategoriaNotFoundException extends NotFoundException {
    constructor() {
        super("Producto Categoria no encontrado");
    }

}