import { NotFoundException } from '@nestjs/common';
export class PublicidadNotFoundException extends NotFoundException {
  constructor() {
    super('Publicidad no Encontrada');
  }
}
