import { Injectable } from '@nestjs/common';
import { MetodoPago } from './entities/metodo-pago.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodosPagosNotFoundException } from './error/metodo-pago-not-found.exception';
import { UpdateMetodosPagosDto } from '../metodo-pago/dto/update-metodo-pago.dto';

@Injectable()
export class MetodoPagoService {
    constructor(
        @InjectRepository(MetodoPago) private readonly metodospagosRepository: Repository<MetodoPago>
    ) { }

    async paginate(page: number, perPage: number): Promise<MetodoPago[]> {
        const offset = (page - 1) * perPage;

        const metodosopagos = await this.metodospagosRepository.createQueryBuilder('metodosopagos')
            .take(perPage)
            .skip(offset)
            .getMany();

        return metodosopagos;
    }

    async findOne(id: number): Promise<MetodoPago> {
        const metodospagos = await this.metodospagosRepository.createQueryBuilder('metodospagos')
            .where('metodospagos.id = :id', { id })
            .getOne();

        if (!metodospagos) {
            throw new MetodosPagosNotFoundException();
        }

        return metodospagos;
    }

    async update(id: number, updateMetodosPagosDto: UpdateMetodosPagosDto): Promise<MetodoPago> {
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
