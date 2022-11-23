import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Marca } from './entities/marca.entity';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { MarcaService } from './marca.service';

@Controller('marca')
export class MarcaController {
    constructor(private readonly marcaService: MarcaService) { }
    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<Marca[]> {
        return await this.marcaService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createMarcaDto: CreateMarcaDto,
    ): Promise<Marca> {
        return await this.marcaService.create(createMarcaDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Marca> {
        return await this.marcaService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateMarcaDto: UpdateMarcaDto,
        @Param('id') id: string
    ): Promise<Marca> {
        return await this.marcaService.update(+id, updateMarcaDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.marcaService.delete(+id);
    }
}
