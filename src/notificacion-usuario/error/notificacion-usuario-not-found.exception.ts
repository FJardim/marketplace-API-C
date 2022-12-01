import { NotFoundException } from '@nestjs/common';
export class NotificacionUsuarioNotFoundException extends NotFoundException {
    constructor() {
        super('Notificacion de usuario no Encontrada');
    }
}