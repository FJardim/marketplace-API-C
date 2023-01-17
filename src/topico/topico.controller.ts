import { Controller, Body, Post, Get, Put, Delete, Param, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Role } from 'src/usuario/enums/role.enum';
import { CreateTopicoDto } from './dto/create-topico.dto';
import { UpdateTopicoDto } from './dto/updated-topico.dto';
import { Topico } from './entities/topico.entity';
import { TopicoService } from './topico.service';
import { Roles } from '../auth/decorators/roles.decorator';

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
    @Roles(Role.ADMIN)
    @UseInterceptors(FileInterceptor('logo'))
    async create(
        @Body() createTopicoDto: CreateTopicoDto,
        @UploadedFile() file: Express.Multer.File
    ): Promise<Topico> {
        return await this.topicoService.create(createTopicoDto, file);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Topico> {
        return await this.topicoService.findOne(+id);
    }

    @Put(':id')
    @Roles(Role.ADMIN)
    @UseInterceptors(FileInterceptor('logo'))
    async update(
        @Body() updateTopicoDto: UpdateTopicoDto,
        @Param('id') id: string
    ): Promise<Topico> {
        return await this.topicoService.update(+id, updateTopicoDto);
    }

    @Delete(':id')
    @Roles(Role.ADMIN)
    async delete(@Param('id') id: string): Promise<void> {
        return await this.topicoService.delete(+id);
    }
}


