import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DeliveryNotasService } from './delivery-notas.service';
import { CreateDeliveryNotasDto } from './dto/create-delivery-notas.dto';
import { DeliveryNotas } from './entities/delivery-notas.entity';
import { UpdateDeliveryNotasDto } from './dto/update-delivery-notas.dto';

@Controller('delivery-notas')
export class DeliveryNotasController {
    constructor(private readonly deliveryNotasService: DeliveryNotasService) { }
    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<DeliveryNotas[]> {
        return await this.deliveryNotasService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createDeliveryNotasDto: CreateDeliveryNotasDto,
    ): Promise<DeliveryNotas> {
        return await this.deliveryNotasService.create(createDeliveryNotasDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<DeliveryNotas> {
        return await this.deliveryNotasService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateDeliveryNotasDto: UpdateDeliveryNotasDto,
        @Param('id') id: string
    ): Promise<DeliveryNotas> {
        return await this.deliveryNotasService.update(+id, updateDeliveryNotasDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deliveryNotasService.delete(+id);
    }
}
