import { NotFoundException } from "@nestjs/common";

export class ClientesRatingNotFoundException extends NotFoundException {
    constructor() {
        super("Clientes Rating no encontrado");
    }

}