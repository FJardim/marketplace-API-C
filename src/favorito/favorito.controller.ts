import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { FavoritoService } from './favorito.service';
import { CreateFavoritosProductsDto } from './dto/create-favorito.dto';
import { FavoritoProducts } from './entities/favorito.entity';

@Controller('favorito-producto')
export class FavoritoController {
    constructor(private readonly favoritoService: FavoritoService) { }

    @Post('favoritoProducto')
    async create(@Body() createFavoritosProductsDto: CreateFavoritosProductsDto): Promise<boolean> {
        return await this.favoritoService.create(createFavoritosProductsDto);
    }
}
