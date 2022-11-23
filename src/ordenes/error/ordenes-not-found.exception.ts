import { NotFoundException } from '@nestjs/common';
export class OrdenesNotFoundException extends NotFoundException {
    constructor() {
        super('Orden no Encontrada');
    }
}