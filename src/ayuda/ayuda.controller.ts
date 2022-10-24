import { Controller, Body, Param, Post, Put, Delete, Get } from '@nestjs/common';
import { AyudaService } from './ayuda.service';
import { CreateAyudaDto } from './dto/create-ayuda.dto';
import { UpdateAyudaDto } from './dto/updates-ayuda.dto';
import { Ayuda } from './entities/ayuda.entity';

@Controller('ayuda')
export class AyudaController {
    constructor(private readonly ayudaService: AyudaService) { }

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
