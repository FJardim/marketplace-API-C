import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notificacion } from './entities/notificacion.entity';
import { CreateNotificacionDto } from './dto/cretate-notificacion.dto';
import { Repository } from 'typeorm';
import { NotificacionsNotFoundException } from './error/notificacion-not-found.exception';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';

@Injectable()
export class NotificacionService {

    constructor(
        @InjectRepository(Notificacion) private readonly notificacionRepository: Repository<Notificacion>
    ) { }
    async paginate(page: number, perPage: number): Promise<Notificacion[]> {
        const offset = (page - 1) * perPage;

        const notificacion = await this.notificacionRepository.createQueryBuilder('notificacion')
            .take(perPage)
            .skip(offset)
            .getMany();

        return notificacion;
    }

    async create(createNotificacionDto: CreateNotificacionDto): Promise<Notificacion> {
        const notificacion = new Notificacion(createNotificacionDto);
        return await this.notificacionRepository.save(notificacion);
    }

    async findOne(id: number): Promise<Notificacion> {
        const notificacion = await this.notificacionRepository.createQueryBuilder('notificacion')
            .where('notificacion.id = :id', { id })
            .getOne();
        // console.log({ id, notificacion })
        if (!notificacion) {
            throw new NotificacionsNotFoundException();
        }

        return notificacion;
    }

    async update(id: number, updateNotificacionDto: UpdateNotificacionDto): Promise<Notificacion> {
        const notificacion = await this.notificacionRepository.createQueryBuilder('notificacion')
            .where('notificacion.id = :id', { id })
            .getOne();

        if (!notificacion) {
            throw new NotificacionsNotFoundException();
        }

        Object.assign(notificacion, updateNotificacionDto);

        return await this.notificacionRepository.save(notificacion);
    }

    async delete(id: number): Promise<void> {
        const notificacion = await this.notificacionRepository.createQueryBuilder('notificacion')
            .where('notificacion.id = :id', { id })
            .getOne()
        if (!notificacion) {
            throw new NotificacionsNotFoundException();
        }
        await this.notificacionRepository.softRemove(notificacion);
    }

}
