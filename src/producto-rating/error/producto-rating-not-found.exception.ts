import { NotFoundException } from "@nestjs/common";

export class ProductoRatingNotFoundException extends NotFoundException {
    constructor() {
        super("Producto Rating no encontrado");
    }

}