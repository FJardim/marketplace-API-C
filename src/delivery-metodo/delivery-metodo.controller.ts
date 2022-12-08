import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DeliveryMetodoService } from './delivery-metodo.service';
import { CreateDeliveryMetodoDto } from './dto/create-delivery-metodo.dto';
import { DeliveryMetodo } from './entities/delivery-metodo.entity';
import { UpdateDeliveryMetodoDto } from './dto/update-delivery-metodo.dto';
import { DeliveryRangos } from './entities/delivery-rango.entity';
import { CreateDeliveryRangosDto } from './dto/create_delivery-rangos.dto';
import { DeliveryZonas } from './entities/delivery-zonas.entity';
import { CreateDeliveryZonasDto } from './dto/create-delivery-zonas.dto';
import { UpdateDeliveryZonasDto } from './dto/update-delivery-zonas.dto';
import { CreateDeliveryZonasRangosDto } from './dto/create-delivery-zona-de-rango.dto';
import { DeliveryZonasRangos } from './entities/delivery-zonas-de-rango.entity';

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

    @Get('/delivery-rangos')
    async paginateDeliveryRangos(
        @Query('page') page: string = '1',
        @Query('perPage') perPage: string = '10',
    ): Promise<DeliveryRangos[]> {
        return await this.deliveryMetodoService.paginateDeliveryRangos(+page, +perPage);
    }

    @Get('/delivery-zonas')
    async paginateDeliveryZonas(
        @Query('page') page: string = '1',
        @Query('perPage') perPage: string = '10',
    ): Promise<DeliveryZonas[]> {
        return await this.deliveryMetodoService.paginateDeliveryZonas(+page, +perPage);
    }

    @Get('/delivery-zonas-rango')
    async paginateDeliveryZonasRango(
        @Query('page') page: string = '1',
        @Query('perPage') perPage: string = '10',
    ): Promise<DeliveryZonasRangos[]> {
        return await this.deliveryMetodoService.paginateDeliveryZonasRangos(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createDeliveryMetodoDto: CreateDeliveryMetodoDto,
    ): Promise<DeliveryMetodo> {
        return await this.deliveryMetodoService.create(createDeliveryMetodoDto);
    }

    @Post('/delivery-rangos')
    async createDeliveryRangos(
        @Body() createDeliveryRangosDto: CreateDeliveryRangosDto,
    ): Promise<DeliveryRangos> {
        return await this.deliveryMetodoService.createDeliveryRangos(createDeliveryRangosDto);
    }

    @Post('/delivery-zonas')
    async createDeliveryZonas(
        @Body() createDeliveryZonasDto: CreateDeliveryZonasDto,
    ): Promise<DeliveryZonas> {
        return await this.deliveryMetodoService.createDeliveryZonas(createDeliveryZonasDto);
    }

    @Post('/delivery-zonas-rangos')
    async createDeliveryZonasRangos(
        @Body() createDeliveryZonasRangosDto: CreateDeliveryZonasRangosDto,
    ): Promise<DeliveryZonasRangos> {
        return await this.deliveryMetodoService.createDeliveryZonasRangos(createDeliveryZonasRangosDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<DeliveryMetodo> {
        return await this.deliveryMetodoService.findOne(+id);
    }

    @Get('/delivery-zonas/:id')
    async findOneDeliveryZonas(@Param('id') id: string): Promise<DeliveryZonas> {
        return await this.deliveryMetodoService.findOneDeliveryZonas(+id);
    }

    @Put(':id')
    async update(
        @Body() updateDeliveryMetodoDto: UpdateDeliveryMetodoDto,
        @Param('id') id: string
    ): Promise<DeliveryMetodo> {
        return await this.deliveryMetodoService.update(+id, updateDeliveryMetodoDto);
    }

    @Put('delivery-zonas/:id')
    async updateZonas(
        @Body() updateDeliveryZonasDto: UpdateDeliveryZonasDto,
        @Param('id') id: string
    ): Promise<DeliveryZonas> {
        return await this.deliveryMetodoService.updateZonas(+id, updateDeliveryZonasDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.deliveryMetodoService.delete(+id);
    }

    @Delete('/delivery-zonas/:id')
    async deleteZonas(@Param('id') id: string): Promise<void> {
        await this.deliveryMetodoService.deleteZonas(+id);
    }

}
