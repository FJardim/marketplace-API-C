import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Ordenes } from './entities/ordenes.entity';
import { OrdenesService } from './ordenes.service';
import { CreateOrdenesDto } from './dto/create-ordenes.dto';
import { UpdateOrdenesDto } from './dto/update-ordenes.dto';

@Controller('ordenes')
export class OrdenesController {
    constructor(private readonly ordenesService: OrdenesService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<Ordenes[]> {
        return await this.ordenesService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createOrdenesDto: CreateOrdenesDto,
    ): Promise<Ordenes> {
        return await this.ordenesService.create(createOrdenesDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Ordenes> {
        return await this.ordenesService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateOrdenesDto: UpdateOrdenesDto,
        @Param('id') id: string
    ): Promise<Ordenes> {
        return await this.ordenesService.update(+id, updateOrdenesDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.ordenesService.delete(+id);
    }
}
