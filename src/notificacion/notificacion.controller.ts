import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Notificacion } from './entities/notificacion.entity';
import { CreateNotificacionDto } from './dto/cretate-notificacion.dto';
import { NotificacionService } from './notificacion.service';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';

@Controller('notificacion')
export class NotificacionController {
    constructor(private readonly notificacionService: NotificacionService) { }

    @Get()
    async paginate(
        @Query('page') page: string = "1",
        @Query('perPage') perPage: string = "10",
    ): Promise<Notificacion[]> {
        return await this.notificacionService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createNotificacionDto: CreateNotificacionDto,
    ): Promise<Notificacion> {
        return await this.notificacionService.create(createNotificacionDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Notificacion> {
        return await this.notificacionService.findOne(+id);
    }

    @Put(':id')
    async update(
        @Body() updateNotificacionDto: UpdateNotificacionDto,
        @Param('id') id: string
    ): Promise<Notificacion> {
        return await this.notificacionService.update(+id, updateNotificacionDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.notificacionService.delete(+id);
    }
}
