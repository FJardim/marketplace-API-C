import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TiendaRatingService } from './tienda_rating.service';
import { TiendaRating } from './entities/tienda-rating.entity';
import { CreateTiendaRatingDto } from './dto/create-tienda-rating.dto';
import { UpdateTiendaRatingDto } from './dto/update-tienda-rating.dto';

@Controller('tienda-rating')
export class TiendaRatingController {
    constructor(private readonly tiendaRatingService: TiendaRatingService) { }

    @Get()
    async paginate(
        @Query('page') page: string = '1',
        @Query('perPage') perPage: string = '10',
    ): Promise<TiendaRating[]> {
        return await this.tiendaRatingService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createTiendaRatingDto: CreateTiendaRatingDto,
    ): Promise<TiendaRating> {
        return await this.tiendaRatingService.create(createTiendaRatingDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<TiendaRating> {
        return await this.tiendaRatingService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateTiendaRatingDto: UpdateTiendaRatingDto,
        @Param('id') id: string
    ): Promise<TiendaRating> {
        return await this.tiendaRatingService.update(+id, updateTiendaRatingDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.tiendaRatingService.delete(+id);
    }

}
