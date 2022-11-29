import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ClientesRating } from '../clientes-rating/entities/clientes-rating.entity';
import { UpdateClientesRatingDto } from '../clientes-rating/dto/update-clientes-rating.dto';
import { CreateClientesRatingDto } from '../clientes-rating/dto/create-clientes-rating.dto';
import { ClientesRatingService } from './clientes-rating.service';

@Controller('clientes-rating')
export class ClientesRatingController {
    constructor(private readonly clientesRatingService: ClientesRatingService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<ClientesRating[]> {
        return await this.clientesRatingService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createClientesRatingDto: CreateClientesRatingDto,
    ): Promise<ClientesRating> {
        return await this.clientesRatingService.create(createClientesRatingDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ClientesRating> {
        return await this.clientesRatingService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateClientesRatingDto: UpdateClientesRatingDto,
        @Param('id') id: string
    ): Promise<ClientesRating> {
        return await this.clientesRatingService.update(+id, updateClientesRatingDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.clientesRatingService.delete(+id);
    }
}
