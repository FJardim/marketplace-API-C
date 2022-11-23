import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Producto } from './entities/producto.entity';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/updated-producto.dto';
import { CreateProductoImagenDto } from './dto/create-producto-imagen.dto';
import { ProductoImagen } from './entities/producto-imagen.entity';
import { ProductoDetalles } from './entities/producto-detalle.entity';
import { CreateProductoDetallesDto } from './dto/create-producto-detalle.dto';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<Producto[]> {
        return await this.productoService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createProductoDto: CreateProductoDto,
    ): Promise<Producto> {
        return await this.productoService.create(createProductoDto);
    }

    @Post('/producto-imagen')
    async createProductoImagen(
        @Body() createProductoImagenDto: CreateProductoImagenDto,
    ): Promise<ProductoImagen> {
        return await this.productoService.createProductoImagen(createProductoImagenDto);
    }

    @Get(':id(\\d+)')
    async findOne(@Param('id') id: string): Promise<Producto> {
        return await this.productoService.findOne(+id);
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

    @Get('/producto-imagen')
    async getAllProductoImagen(@Query('idProducto') idProducto: string = '0'): Promise<ProductoImagen[]> {
        return await this.productoService.getAllProductoImagen(+idProducto);
    }

    @Post('/producto-detalles')
    async createProductoDetalles(
        @Body() createProductoDetallesDto: CreateProductoDetallesDto,
    ): Promise<ProductoDetalles> {
        return await this.productoService.createProductoDetalles(createProductoDetallesDto);
    }

}
