import { NotFoundException } from "@nestjs/common";

export class CategoryNotFoundException extends NotFoundException {
    constructor() {
        super("Categoría no encontrada");
    }

}