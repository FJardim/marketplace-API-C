import { HttpException, HttpStatus } from "@nestjs/common";

export class ClientesNotFoundException extends HttpException {
    constructor() {
        super({
            message: 'Cliente no encontrado',
        }, HttpStatus.NOT_FOUND);
    }
}