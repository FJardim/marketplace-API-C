import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DeliveryTypeMetodo } from './entities/delivery-type-metodo.entity';
import { CreateDeliveryTypeMetodoDto } from './dto/create-delivery-type-metodo.dto';
import { DeliveryTypeMetodoService } from './delivery-type-metodo.service';

@Controller('delivery-type-metodo')
export class DeliveryTypeMetodoController {
    constructor(private readonly deliveryTypeMetodoService: DeliveryTypeMetodoService) { }
    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<DeliveryTypeMetodo[]> {
        return await this.deliveryTypeMetodoService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createDeliveryTypeMetodoDto: CreateDeliveryTypeMetodoDto,
    ): Promise<DeliveryTypeMetodo> {
        return await this.deliveryTypeMetodoService.create(createDeliveryTypeMetodoDto);
    }

}
