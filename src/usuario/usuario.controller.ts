import { Controller, Get, Query, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/updated-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<Usuario[]> {
        return await this.usuarioService.paginate(+page, +perPage);
    }

    //obengo lo que esta en CreacteusuarioDto
    //Post: Decorador que indica que para ejecutar este método accedemos con el método POST de una petición API Rest.
    //Body: Decorador que indica obtener los valores del body de la petición API Rest.
    @Post()
    async create(
        @Body() createUsuarioDto: CreateUsuarioDto,
    ): Promise<Usuario> {
        return await this.usuarioService.create(createUsuarioDto);
    }

    //Get: Decorador que indica que para ejecutar este método accedemos con el método GET de una petición API Rest.
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Usuario> {
        return await this.usuarioService.findOne(+id);
    }

    //Put: Decorador que indica que para ejecutar este método accedemos con el método PUT de una petición API Rest.
    @Put(':id')
    async update(
        @Body() updateUsuarioDto: UpdateUsuarioDto,
        @Param('id') id: string
    ): Promise<Usuario> {
        return await this.usuarioService.update(+id, updateUsuarioDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.usuarioService.delete(+id);
    }
}
