import { NotFoundException } from "@nestjs/common";

export class DeliveryZonasRangoNotFoundException extends NotFoundException {
    constructor() {
        super("El método de entrega a la Zona sw rango del delivery no fue encontrada");
    }

}