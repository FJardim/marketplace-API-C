import { Controller, Body, Post, Get, Put, Delete, Param, Query } from '@nestjs/common';
import { CreateTopicoDto } from './dto/create-topico.dto';
import { UpdateTopicoDto } from './dto/updated-topico.dto';
import { Topico } from './entities/topico.entity';
import { TopicoService } from './topico.service';

@Controller('topico')
export class TopicoController {
    constructor(private readonly topicoService: TopicoService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<Topico[]> {
        return await this.topicoService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createTopicoDto: CreateTopicoDto,
    ): Promise<Topico> {
        return await this.topicoService.create(createTopicoDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Topico> {
        return await this.topicoService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateTopicoDto: UpdateTopicoDto,
        @Param('id') id: string
    ): Promise<Topico> {
        return await this.topicoService.update(+id, updateTopicoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.topicoService.delete(+id);
    }
}


