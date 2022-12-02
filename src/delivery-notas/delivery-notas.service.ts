import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryNotas } from './entities/delivery-notas.entity';
import { CreateDeliveryNotasDto } from './dto/create-delivery-notas.dto';
import { DeliveryNotasNotFoundException } from './error/delivery-notas-not-found.excepcion';
import { UpdateDeliveryNotasDto } from './dto/update-delivery-notas.dto';

@Injectable()
export class DeliveryNotasService {
    constructor(
        @InjectRepository(DeliveryNotas)
        private readonly deliveryNotasRepository: Repository<DeliveryNotas>,
    ) { }
    async paginate(page: number, perPage: number): Promise<DeliveryNotas[]> {
        const offset = (page - 1) * perPage;

        const deliveryNotas = await this.deliveryNotasRepository
            .createQueryBuilder('deliveryNotas')
            .take(perPage)
            .skip(offset)
            .getMany();

        return deliveryNotas;
    }

    async create(createDeliveryNotasDto: CreateDeliveryNotasDto): Promise<DeliveryNotas> {
        const deliveryNotas = new DeliveryNotas(createDeliveryNotasDto);

        return await this.deliveryNotasRepository.save(deliveryNotas);
    }

    async findOne(id: number): Promise<DeliveryNotas> {
        const deliveryNotas = await this.deliveryNotasRepository
            .createQueryBuilder('deliveryNotas')
            .where('deliveryNotas.id = :id', { id })
            .getOne();
        console.log({ id, deliveryNotas });
        if (!deliveryNotas) {
            throw new DeliveryNotasNotFoundException();
        }

        return deliveryNotas;
    }

    async update(id: number, updateDeliveryNotasDto: UpdateDeliveryNotasDto): Promise<DeliveryNotas> {
        const deliveryNotas = await this.deliveryNotasRepository
            .createQueryBuilder('deliveryNotas')
            .where('deliveryNotas.id = :id', { id })
            .getOne();

        if (!deliveryNotas) {
            throw new DeliveryNotasNotFoundException();
        }

        Object.assign(deliveryNotas, updateDeliveryNotasDto);

        return await this.deliveryNotasRepository.save(deliveryNotas);
    }

    async delete(id: number): Promise<void> {
        const deliveryNotas = await this.deliveryNotasRepository
            .createQueryBuilder('deliveryNotas')
            .where('deliveryNotas.id = :id', { id })
            .getOne();

        if (!deliveryNotas) {
            throw new DeliveryNotasNotFoundException();
        }

        await this.deliveryNotasRepository.softRemove(deliveryNotas);
    }
}
