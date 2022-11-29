import { NotFoundException } from '@nestjs/common';
export class OrdenItemsNotFoundException extends NotFoundException {
    constructor() {
        super('Orden Items no Encontrada');
    }
}