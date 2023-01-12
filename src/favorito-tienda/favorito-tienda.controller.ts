import { Body, Controller, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CreateFavoritosTiendaDto } from './dto/create-favorito-tienda.dto';
import { FavoritoTiendaService } from './favorito-tienda.service';
import { Role } from '../usuario/enums/role.enum';

@Controller('favorito-tienda')
export class FavoritoTiendaController {
    constructor(private readonly favoritoTiendaService: FavoritoTiendaService) { }
    @Post('favoritoTienda')
    @Roles(Role.CLIENT)

    async create(@Body() createFavoritosTiendaDto: CreateFavoritosTiendaDto): Promise<boolean> {
        return await this.favoritoTiendaService.create(createFavoritosTiendaDto);
    }

}