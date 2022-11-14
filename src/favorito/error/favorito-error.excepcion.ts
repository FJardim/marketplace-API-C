import { HttpException, HttpStatus } from "@nestjs/common";

export class FavoritoErrorExcepcion extends HttpException {
    constructor() {
        super({
            message: ['Ya existe un favorito para este cliente'],
        }, HttpStatus.BAD_REQUEST);
    }
}