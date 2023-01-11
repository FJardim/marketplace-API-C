import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidarCredentialesException extends HttpException {
    constructor() {
        super({
            message: 'Credenciales invalidas',
        }, HttpStatus.BAD_REQUEST);
    }
}