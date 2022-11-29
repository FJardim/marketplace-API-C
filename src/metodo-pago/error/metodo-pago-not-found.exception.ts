import { NotFoundException } from '@nestjs/common';
export class MetodosPagosNotFoundException extends NotFoundException {
    constructor() {
        super('Metodos de Pagos no Encontrado');
    }
}