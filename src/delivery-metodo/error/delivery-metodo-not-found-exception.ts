import { NotFoundException } from "@nestjs/common";

export class DeliveryMetodoNotFoundException extends NotFoundException {
    constructor() {
        super("El método de entrega del delivery no fue encontrada");
    }

}