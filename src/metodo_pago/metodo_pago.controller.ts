import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateMetodosPagosDto } from './dto/create-metodo-pago.dto';
import { MetodosPagos } from './entities/metodo-pago.entity';
import { UpdateMetodosPagosDto } from './dto/update-metodo-pago.dto';
import { MetodosPagosService } from './metodo_pago.service';

@Controller('metodo-pago')
export class MetodosPagosController {
    constructor(private readonly metodospagosService: MetodosPagosService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<MetodosPagos[]> {
        return await this.metodospagosService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createMetodosPagosDto: CreateMetodosPagosDto,
    ): Promise<MetodosPagos> {
        console.log(createMetodosPagosDto);
        return await this.metodospagosService.create(createMetodosPagosDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<MetodosPagos> {
        return await this.metodospagosService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateMetodosPagosDto: UpdateMetodosPagosDto,
        @Param('id') id: string
    ): Promise<MetodosPagos> {
        return await this.metodospagosService.update(+id, updateMetodosPagosDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.metodospagosService.delete(+id);
    }
}
