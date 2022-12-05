import { NotFoundException } from "@nestjs/common";

export class DeliveryZonasNotFoundException extends NotFoundException {
    constructor() {
        super("La Zona de delivery no fue encontrada");
    }

}