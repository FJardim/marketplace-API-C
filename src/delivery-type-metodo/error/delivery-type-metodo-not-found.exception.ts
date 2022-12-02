import { NotFoundException } from "@nestjs/common";

export class DeliveryTypeMetodoNotFoundException extends NotFoundException {
    constructor() {
        super("metodo de entrega no encontrada");
    }

}