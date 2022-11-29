import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OrdenesStatus } from './entities/ordenes-status.entity';
import { OrdenesStatusService } from './ordenes-status.service';
import { CreateOrdenesStatusDto } from './dto/create-ordenes-status.dto';
import { UpdateOrdenesStatusDto } from './dto/update-ordenes-status.dto';

@Controller('ordenes-status')
export class OrdenesStatusController {
    constructor(private readonly ordenesStatusService: OrdenesStatusService) { }

    @Get()
    async paginate(
        @Query('page') page: string = '1',
        @Query('perPage') perPage: string = '10',
    ): Promise<OrdenesStatus[]> {
        return await this.ordenesStatusService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createOrdenesStatusDto: CreateOrdenesStatusDto,
    ): Promise<OrdenesStatus> {
        return await this.ordenesStatusService.create(createOrdenesStatusDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<OrdenesStatus> {
        return await this.ordenesStatusService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateOrdenesStatusDto: UpdateOrdenesStatusDto,
        @Param('id') id: string
    ): Promise<OrdenesStatus> {
        return await this.ordenesStatusService.update(+id, updateOrdenesStatusDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.ordenesStatusService.delete(+id);
    }
}