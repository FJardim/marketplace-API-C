import { Controller, Post, Body, Get, Param, Put, Delete, Query } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/updated-contacto.dto';
import { Contacto } from './entities/contacto.entity';

@Controller('contacto')
export class ContactoController {
    constructor(private readonly contactoService: ContactoService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<Contacto[]> {
        return await this.contactoService.paginate(+page, +perPage);
    }

    //obengo lo que esta en CreacteContactoDto
    //Post: Decorador que indica que para ejecutar este método accedemos con el método POST de una petición API Rest.
    //Body: Decorador que indica obtener los valores del body de la petición API Rest.
    @Post()
    async create(
        @Body() createContactoDto: CreateContactoDto,
    ): Promise<Contacto> {
        return await this.contactoService.create(createContactoDto);
    }

    //Get: Decorador que indica que para ejecutar este método accedemos con el método GET de una petición API Rest.
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Contacto> {
        return await this.contactoService.findOne(+id);
    }

    //Put: Decorador que indica que para ejecutar este método accedemos con el método PUT de una petición API Rest.
    @Put(':id')
    async update(
        @Body() updateContactoDto: UpdateContactoDto,
        @Param('id') id: string
    ): Promise<Contacto> {
        return await this.contactoService.update(+id, updateContactoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.contactoService.delete(+id);
    }
}

