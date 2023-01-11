import { Injectable } from '@nestjs/common';
import { UsuarioStatus } from './entities/usuario-status.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginacionResult } from '../soporte/paginacion/paginacion-result';
import { PaginacionOpcion } from 'src/soporte/paginacion/paginacion-opcion';

@Injectable()
export class UsuarioStatusService {
    constructor(@InjectRepository(UsuarioStatus) private readonly usuarioStatusRepository: Repository<UsuarioStatus>) { }

    async paginate({ perPage, offset }: PaginacionOpcion): Promise<PaginacionResult<UsuarioStatus>> {
        const [usuarioStatus, total] = await this.usuarioStatusRepository.createQueryBuilder('usuarioStatus')
            .take(perPage)
            .skip(offset)
            .getManyAndCount();

        return new PaginacionResult(usuarioStatus, total, perPage);
    }
}

