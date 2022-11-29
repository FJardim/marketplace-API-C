import { Body, Controller, Delete, Get, Param, Put, Query } from '@nestjs/common';
import { MetodoPago } from './entities/metodo-pago.entity';
import { UpdateMetodosPagosDto } from '../metodo-pago/dto/update-metodo-pago.dto';
import { MetodoPagoService } from './metodo-pago.service';

@Controller('metodo-pago')
export class MetodoPagoController {
    constructor(private readonly metodospagosService: MetodoPagoService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<MetodoPago[]> {
        return await this.metodospagosService.paginate(+page, +perPage);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<MetodoPago> {
        return await this.metodospagosService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateMetodosPagosDto: UpdateMetodosPagosDto,
        @Param('id') id: string
    ): Promise<MetodoPago> {
        return await this.metodospagosService.update(+id, updateMetodosPagosDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.metodospagosService.delete(+id);
    }
}
