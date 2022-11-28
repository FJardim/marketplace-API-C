import { Controller, Get, Query, Body, Put, Param, Delete, Post } from '@nestjs/common';
import { CreateClientesDto } from './dto/create-clientes.dto';
import { Clientes } from './entities/clientes.entity';
import { ClientesService } from './clientes.service';
import { UpdateClientesDto } from './dto/update-clientes.dto';

@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) { }
    //obengo lo que esta en CreacteclientesDto
    //Post: Decorador que indica que para ejecutar este método accedemos con el método POST de una petición API Rest.
    //Body: Decorador que indica obtener los valores del body de la petición API Rest.
    //Get: Decorador que indica que para ejecutar este método accedemos con el método GET de una petición API Rest.
    //Put: Decorador que indica que para ejecutar este método accedemos con el método PUT de una petición API Rest.
    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<Clientes[]> {
        return await this.clientesService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createClientesDto: CreateClientesDto,
    ): Promise<Clientes> {
        console.log(createClientesDto)
        return await this.clientesService.create(createClientesDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Clientes> {
        return await this.clientesService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateClientesDto: UpdateClientesDto,
        @Param('id') id: string
    ): Promise<Clientes> {
        return await this.clientesService.update(+id, updateClientesDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.clientesService.delete(+id);
    }
}
