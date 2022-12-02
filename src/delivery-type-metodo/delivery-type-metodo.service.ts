import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryTypeMetodo } from './entities/delivery-type-metodo.entity';
import { CreateDeliveryTypeMetodoDto } from './dto/create-delivery-type-metodo.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryTypeMetodoService {
    constructor(
        @InjectRepository(DeliveryTypeMetodo)
        private readonly deliveryTypeMetodoRepository: Repository<DeliveryTypeMetodo>,
    ) { }
    async paginate(page: number, perPage: number): Promise<DeliveryTypeMetodo[]> {
        const offset = (page - 1) * perPage;

        const deliveryTypeMetodo = await this.deliveryTypeMetodoRepository
            .createQueryBuilder('deliveryTypeMetodo')
            .take(perPage)
            .skip(offset)
            .getMany();

        return deliveryTypeMetodo;
    }

    async create(createDeliveryTypeMetodoDto: CreateDeliveryTypeMetodoDto): Promise<DeliveryTypeMetodo> {
        const deliveryTypeMetodo = new DeliveryTypeMetodo(createDeliveryTypeMetodoDto);

        return await this.deliveryTypeMetodoRepository.save(deliveryTypeMetodo);
    }
}
