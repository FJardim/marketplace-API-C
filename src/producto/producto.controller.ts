import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Producto } from './entities/producto.entity';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/updated-prodcuto.dto';
import { CreateProductoImagenDto } from './dto/create-producto-imagen.dto';
import { ProductoImagen } from './entities/producto-imagen.entity';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) { }

    @Get()
    async paginate(
        @Query('page') page: string,
        @Query('perPage') perPage: string,
    ): Promise<Producto[]> {
        return await this.productoService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createProductoDto: CreateProductoDto,
    ): Promise<Producto> {
        return await this.productoService.create(createProductoDto);
    }

    @Put(':id')
    async update(
        @Body() updateProductoDto: UpdateProductoDto,
        @Param('id') id: string
    ): Promise<Producto> {
        return await this.productoService.update(+id, updateProductoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.productoService.delete(+id);
    }

    @Post()
    async createProductoImagen(
        @Body() createProductoImagenDto: CreateProductoImagenDto,
    ): Promise<ProductoImagen> {
        return await this.productoService.createImagen(createProductoImagenDto);
    }
}
