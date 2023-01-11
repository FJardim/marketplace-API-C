import { Controller, Get, Query } from '@nestjs/common';
import { UsuarioStatus } from './entities/usuario-status.entity';
import { PaginacionOpcion } from 'src/soporte/paginacion/paginacion-opcion';
import { PaginacionResult } from '../soporte/paginacion/paginacion-result';
import { PaginacionPipe } from '../soporte/paginacion/paginacion-pipe';
import { UsuarioStatusService } from './usuario-status.service';

@Controller('usuario-status')
export class UsuarioStatusController {
    constructor(private readonly usuarioStatusService: UsuarioStatusService) { }

    @Get()
    async paginate(@Query(PaginacionPipe) options: PaginacionOpcion): Promise<PaginacionResult<UsuarioStatus>> {
        return this.usuarioStatusService.paginate(options);
    }
}
