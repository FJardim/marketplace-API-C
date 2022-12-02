import { NotFoundException } from "@nestjs/common";

export class DeliveryNotasNotFoundException extends NotFoundException {
    constructor() {
        super("La nota del Delivery no fue encontrada");
    }

}