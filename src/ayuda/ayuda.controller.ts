import { Controller, Body, Param, Post, Put, Delete, Get, Query } from '@nestjs/common';
import { AyudaService } from './ayuda.service';
import { CreateAyudaDto } from './dto/create-ayuda.dto';
import { UpdateAyudaDto } from './dto/updates-ayuda.dto';
import { Ayuda } from './entities/ayuda.entity';

@Controller('ayuda')
export class AyudaController {
    constructor(private readonly ayudaService: AyudaService) { }


    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
        @Query('id_topico') id_topico: string,
    ): Promise<Ayuda[]> {
        return await this.ayudaService.paginate(+page, +perPage, +id_topico);
    }

    @Post()
    async create(
        @Body() createAyudaDto: CreateAyudaDto,
    ): Promise<Ayuda> {
        return await this.ayudaService.create(createAyudaDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Ayuda> {
        return await this.ayudaService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateAyudaDto: UpdateAyudaDto,
        @Param('id') id: string
    ): Promise<Ayuda> {
        return await this.ayudaService.update(+id, updateAyudaDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.ayudaService.delete(+id);
    }
}
