import { Body, Controller, Post } from '@nestjs/common';
import { FavoritoService } from './favorito.service';
import { CreateFavoritoDto } from './dto/create-favorito.dto';

@Controller('favorito')
export class FavoritoController {
    constructor(private readonly favoritoService: FavoritoService) { }

    @Post(':productId')
    @Post()
    async create(@Body() createFavoritoDto: CreateFavoritoDto): Promise<boolean> {
        return await this.favoritoService.create(createFavoritoDto);
    }
}
