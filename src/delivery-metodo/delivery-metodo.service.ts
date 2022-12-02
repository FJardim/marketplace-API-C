import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeliveryMetodoDto } from './dto/create-delivery-metodo.dto';
import { DeliveryMetodo } from './entities/delivery-metodo.entity';
import { DeliveryMetodoNotFoundException } from './error/delivery-metodo-not-found-exception';
import { UpdateDeliveryMetodoDto } from './dto/update-delivery-metodo.dto';

@Injectable()
export class DeliveryMetodoService {
    constructor(
        @InjectRepository(DeliveryMetodo)
        private readonly deliveryMetodoRepository: Repository<DeliveryMetodo>,
    ) { }
    async paginate(page: number, perPage: number): Promise<DeliveryMetodo[]> {
        const offset = (page - 1) * perPage;

        const deliveryMetodo = await this.deliveryMetodoRepository
            .createQueryBuilder('deliveryMetodo')
            .take(perPage)
            .skip(offset)
            .getMany();

        return deliveryMetodo;
    }

    async create(createDeliveryMetodoDto: CreateDeliveryMetodoDto): Promise<DeliveryMetodo> {
        const deliveryMetodo = new DeliveryMetodo(createDeliveryMetodoDto);

        return await this.deliveryMetodoRepository.save(deliveryMetodo);
    }

    async findOne(id: number): Promise<DeliveryMetodo> {
        const deliveryMetodo = await this.deliveryMetodoRepository
            .createQueryBuilder('deliveryMetodo')
            .where('deliveryMetodo.id = :id', { id })
            .getOne();
        console.log({ id, deliveryMetodo });
        if (!deliveryMetodo) {
            throw new DeliveryMetodoNotFoundException();
        }

        return deliveryMetodo;
    }

    async update(id: number, updateDeliveryMetodoDto: UpdateDeliveryMetodoDto): Promise<DeliveryMetodo> {
        const deliveryMetodo = await this.deliveryMetodoRepository
            .createQueryBuilder('marca')
            .where('marca.id = :id', { id })
            .getOne();

        if (!deliveryMetodo) {
            throw new DeliveryMetodoNotFoundException();
        }

        Object.assign(deliveryMetodo, updateDeliveryMetodoDto);

        return await this.deliveryMetodoRepository.save(deliveryMetodo);
    }

    async delete(id: number): Promise<void> {
        const deliveryMetodo = await this.deliveryMetodoRepository
            .createQueryBuilder('deliveryMetodo')
            .where('deliveryMetodo.id = :id', { id })
            .getOne();

        if (!deliveryMetodo) {
            throw new DeliveryMetodoNotFoundException();
        }

        await this.deliveryMetodoRepository.softRemove(deliveryMetodo);
    }
}
