import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductoRating } from './entities/producto-rating.entity';
import { ProductoRatingService } from './producto-rating.service';
import { CreateProductoRatingDto } from './dto/create-producto-rating.dto';
import { UpdateProductoRatingDto } from './dto/update-producto-rating.dto';

@Controller('producto-rating')
export class ProductoRatingController {
    constructor(private readonly productoRatingService: ProductoRatingService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<ProductoRating[]> {
        return await this.productoRatingService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createUsuarioDto: CreateProductoRatingDto,
    ): Promise<ProductoRating> {
        return await this.productoRatingService.create(createUsuarioDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ProductoRating> {
        return await this.productoRatingService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateProductoRatingDto: UpdateProductoRatingDto,
        @Param('id') id: string
    ): Promise<ProductoRating> {
        return await this.productoRatingService.update(+id, updateProductoRatingDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.productoRatingService.delete(+id);
    }

}
