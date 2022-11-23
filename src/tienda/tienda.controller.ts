import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TiendaService } from './tienda.service';
import { CreateTiendaDto } from './dto/create-tienda.dto';
import { Tienda } from './entities/tienda.entity';
import { UpdateTiendaDto } from './dto/update-tienda.dto';
import { CreateTiendaCategoriaDto } from './dto/create-tienda-categoria.dto';
import { TiendaCategoria } from './entities/tienda-categoria.entity';

@Controller('tienda')
export class TiendaController {
    constructor(private readonly tiendaService: TiendaService) { }

    @Get()
    async paginate(
        @Query('page') page: string = '1',
        @Query('perPage') perPage: string = '10',
    ): Promise<Tienda[]> {
        return await this.tiendaService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createTiendaDto: CreateTiendaDto,
    ): Promise<Tienda> {
        return await this.tiendaService.create(createTiendaDto);
    }

    @Get('/tienda-categoria')
    async paginateTiendaCategoria(
        @Query('page') page: string = '1',
        @Query('perPage') perPage: string = '10',
    ): Promise<TiendaCategoria[]> {
        return await this.tiendaService.paginateTiendaCategoria(+page, +perPage);
    }

    @Post('/tienda-categoria')
    async createTiendaCategoria(
        @Body() createTiendaCategoriaDto: CreateTiendaCategoriaDto,
    ): Promise<TiendaCategoria> {
        return await this.tiendaService.createTiendaCategoria(createTiendaCategoriaDto);
    }

    @Get(':id(\\d+)')
    async findOne(@Param('id') id: string): Promise<Tienda> {
        return await this.tiendaService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateTiendaDto: UpdateTiendaDto,
        @Param('id') id: string
    ): Promise<Tienda> {
        return await this.tiendaService.update(+id, updateTiendaDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.tiendaService.delete(+id);
    }

    @Get('/tienda-categoria/:id')
    async findOneTiendaCategoria(@Param('id') id: string): Promise<TiendaCategoria> {
        return await this.tiendaService.findOneTiendaCategoria(+id);
    }
}
