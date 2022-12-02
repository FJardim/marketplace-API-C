import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DeliveryMetodoService } from './delivery-metodo.service';
import { CreateDeliveryMetodoDto } from './dto/create-delivery-metodo.dto';
import { DeliveryMetodo } from './entities/delivery-metodo.entity';
import { UpdateDeliveryMetodoDto } from './dto/update-delivery-metodo.dto';

@Controller('delivery-metodos')
export class DeliveryMetodoController {
    constructor(private readonly deliveryMetodoService: DeliveryMetodoService) { }
    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<DeliveryMetodo[]> {
        return await this.deliveryMetodoService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createDeliveryMetodoDto: CreateDeliveryMetodoDto,
    ): Promise<DeliveryMetodo> {
        return await this.deliveryMetodoService.create(createDeliveryMetodoDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<DeliveryMetodo> {
        return await this.deliveryMetodoService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateDeliveryMetodoDto: UpdateDeliveryMetodoDto,
        @Param('id') id: string
    ): Promise<DeliveryMetodo> {
        return await this.deliveryMetodoService.update(+id, updateDeliveryMetodoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deliveryMetodoService.delete(+id);
    }
}
