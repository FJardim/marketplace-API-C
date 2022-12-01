import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateNotificacionUsuarioDto } from './dto/create-notificacion-usuario.dto';
import { NotificacionUsuario } from './entities/notificacion-usuario.entity';
import { NotificacionUsuarioService } from './notificacion-usuario.service';

@Controller('notificacion-usuario')
export class NotificacionUsuarioController {
    constructor(private readonly notificacionUsuarioService: NotificacionUsuarioService) { }

    @Get()
    async paginate(
        @Query('page') page: string = '1',
        @Query('perPage') perPage: string = '10',
    ): Promise<NotificacionUsuario[]> {
        return await this.notificacionUsuarioService.paginate(+page, +perPage);
    }

    @Post()
    async create(
        @Body() createNotificacionUsuarioDto: CreateNotificacionUsuarioDto,
    ): Promise<NotificacionUsuario> {
        return await this.notificacionUsuarioService.create(createNotificacionUsuarioDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<NotificacionUsuario> {
        return await this.notificacionUsuarioService.findOne(+id);
    }
}
