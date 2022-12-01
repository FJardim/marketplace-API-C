import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificacionUsuario } from './entities/notificacion-usuario.entity';
import { Repository } from 'typeorm';
import { CreateNotificacionUsuarioDto } from './dto/create-notificacion-usuario.dto';
import { NotificacionUsuarioNotFoundException } from './error/notificacion-usuario-not-found.exception';

@Injectable()
export class NotificacionUsuarioService {
    constructor(
        @InjectRepository(NotificacionUsuario) private readonly notificacionUsuarioRepository: Repository<NotificacionUsuario>
    ) { }
    async paginate(page: number, perPage: number): Promise<NotificacionUsuario[]> {
        const offset = (page - 1) * perPage;

        const notificacionUsuario = await this.notificacionUsuarioRepository.createQueryBuilder('notificacionUsuario')
            .take(perPage)
            .skip(offset)
            .getMany();

        return notificacionUsuario;
    }

    async create(createNotificacionUsuarioDto: CreateNotificacionUsuarioDto): Promise<NotificacionUsuario> {
        const notificacionUsuario = new NotificacionUsuario(createNotificacionUsuarioDto);
        return await this.notificacionUsuarioRepository.save(notificacionUsuario);
    }

    async findOne(id: number): Promise<NotificacionUsuario> {
        const notificacionUsuario = await this.notificacionUsuarioRepository.createQueryBuilder('notificacionUsuario')
            .where('notificacionUsuario.id = :id', { id })
            .getOne();

        if (!notificacionUsuario) {
            throw new NotificacionUsuarioNotFoundException();
        }

        return notificacionUsuario;
    }
}
