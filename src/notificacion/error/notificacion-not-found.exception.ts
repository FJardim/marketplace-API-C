import { NotFoundException } from '@nestjs/common';
export class NotificacionsNotFoundException extends NotFoundException {
    constructor() {
        super('Notificacion no Encontrada');
    }
}