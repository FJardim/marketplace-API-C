import { Injectable } from '@nestjs/common';
import { MetodosPagos } from './entities/metodo-pago.entity';
import { CreateMetodosPagosDto } from './dto/create-metodo-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodosPagosNotFoundException } from './error/metodo-pago-not-found.exception';
import { UpdateMetodosPagosDto } from './dto/update-metodo-pago.dto';

@Injectable()
export class MetodosPagosService {
    constructor(
        @InjectRepository(MetodosPagos) private readonly metodospagosRepository: Repository<MetodosPagos>
    ) { }

    async paginate(page: number, perPage: number): Promise<MetodosPagos[]> {
        const offset = (page - 1) * perPage;

        const metodosopagos = await this.metodospagosRepository.createQueryBuilder('metodosopagos')
            .take(perPage)
            .skip(offset)
            .getMany();

        return metodosopagos;
    }

    async create(createMetodosPagosDto: CreateMetodosPagosDto): Promise<MetodosPagos> {
        const metodospagos = new MetodosPagos(createMetodosPagosDto);
        return await this.metodospagosRepository.save(metodospagos);
    }

    async findOne(id: number): Promise<MetodosPagos> {
        const metodospagos = await this.metodospagosRepository.createQueryBuilder('metodospagos')
            .where('metodospagos.id = :id', { id })
            .getOne();

        if (!metodospagos) {
            throw new MetodosPagosNotFoundException();
        }

        return metodospagos;
    }

    async update(id: number, updateMetodosPagosDto: UpdateMetodosPagosDto): Promise<MetodosPagos> {
        const metodospagos = await this.metodospagosRepository.createQueryBuilder('metodospagos')
            .where('metodospagos.id = :id', { id })
            .getOne();

        if (!metodospagos) {
            throw new MetodosPagosNotFoundException();
        }

        Object.assign(metodospagos, updateMetodosPagosDto);

        return await this.metodospagosRepository.save(metodospagos);
    }

    async delete(id: number): Promise<void> {
        const metodospagos = await this.metodospagosRepository.createQueryBuilder('metodospagos')
            .where('metodospagos.id = :id', { id })
            .getOne();

        if (!metodospagos) {
            throw new MetodosPagosNotFoundException();
        }

        await this.metodospagosRepository.softRemove(metodospagos);
    }
}
