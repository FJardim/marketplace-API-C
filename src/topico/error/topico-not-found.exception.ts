import { NotFoundException } from "@nestjs/common";

export class TopicoNotFoundException extends NotFoundException {
    constructor() {
        super("Topico no encontrado");
    }

}