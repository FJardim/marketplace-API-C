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
        @Query('page') page: string,
        @Query('perPage') perPage: string,
    ): Promise<Topico[]> {
        return await this.topicoService.paginate(+page, +perPage);
    }

    //obengo lo que esta en CreacteTopicoDto
    //Post: Decorador que indica que para ejecutar este método accedemos con el método POST de una petición API Rest.
    //Body: Decorador que indica obtener los valores del body de la petición API Rest.
    @Post()
    async create(
        @Body() createTopicoDto: CreateTopicoDto,
    ): Promise<Topico> {
        return await this.topicoService.create(createTopicoDto);
    }

    //Get: Decorador que indica que para ejecutar este método accedemos con el método GET de una petición API Rest.
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Topico> {
        return await this.topicoService.findOne(+id);
    }

    //Put: Decorador que indica que para ejecutar este método accedemos con el método PUT de una petición API Rest.
    @Put(':id')
    async update(
        @Body() updateTopicoDto: UpdateTopicoDto,
        @Param('id') id: string
    ): Promise<Topico> {
        return await this.topicoService.update(+id, updateTopicoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.topicoService.delete(+id);
    }
}

