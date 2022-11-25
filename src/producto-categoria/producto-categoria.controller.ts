import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UpdateProductoCategoriaDto } from './dto/update-producto-categoria.dto';
import { CreateProductoCategoriaDto } from './dto/create-producto-categoria.dto';
import { ProductoCategoria } from './entities/producto-categoria.entity';
import { ProductoCategoriaService } from './producto-categoria.service';

@Controller('producto-categoria')
export class ProductoCategoriaController {
    constructor(private readonly productoCategoriaService: ProductoCategoriaService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<ProductoCategoria[]> {
        return await this.productoCategoriaService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createUsuarioDto: CreateProductoCategoriaDto,
    ): Promise<ProductoCategoria> {
        return await this.productoCategoriaService.create(createUsuarioDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ProductoCategoria> {
        return await this.productoCategoriaService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateProductoCategoriaDto: UpdateProductoCategoriaDto,
        @Param('id') id: string
    ): Promise<ProductoCategoria> {
        return await this.productoCategoriaService.update(+id, updateProductoCategoriaDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.productoCategoriaService.delete(+id);
    }
}
