import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeliveryMetodoDto } from './dto/create-delivery-metodo.dto';
import { DeliveryMetodo } from './entities/delivery-metodo.entity';
import { DeliveryMetodoNotFoundException } from './error/delivery-metodo-not-found-exception';
import { UpdateDeliveryMetodoDto } from './dto/update-delivery-metodo.dto';
import { DeliveryRangos } from './entities/delivery-rango.entity';
import { CreateDeliveryRangosDto } from './dto/create_delivery-rangos.dto';
import { CreateDeliveryZonasDto } from './dto/create-delivery-zonas.dto';
import { DeliveryZonas } from './entities/delivery-zonas.entity';
import { DeliveryZonasRangos } from './entities/delivery-zonas-de-rango.entity';
import { DeliveryZonasNotFoundException } from './error/delivery-zonas-not-found-exception';
import { UpdateDeliveryZonasDto } from './dto/update-delivery-zonas.dto';
import { CreateDeliveryZonasRangosDto } from './dto/create-delivery-zona-de-rango.dto';

@Injectable()
export class DeliveryMetodoService {
    constructor(
        @InjectRepository(DeliveryMetodo) private readonly deliveryMetodoRepository: Repository<DeliveryMetodo>,
        @InjectRepository(DeliveryRangos) private readonly deliveryRangosRepository: Repository<DeliveryRangos>,
        @InjectRepository(DeliveryZonas) private readonly deliveryZonasRepository: Repository<DeliveryZonas>,
        @InjectRepository(DeliveryZonasRangos) private readonly deliveryZonasRangosRepository: Repository<DeliveryZonasRangos>,

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

    async paginateDeliveryRangos(page: number, perPage: number): Promise<DeliveryRangos[]> {
        const offset = (page - 1) * perPage;
        const deliveryRangos = await this.deliveryRangosRepository.createQueryBuilder('deliveryRangos')
            .take(perPage)
            .skip(offset)
            .getMany();
        return deliveryRangos;
    }

    async paginateDeliveryZonas(page: number, perPage: number): Promise<DeliveryZonas[]> {
        const offset = (page - 1) * perPage;
        const deliveryZonas = await this.deliveryZonasRepository.createQueryBuilder('deliveryZonas')
            .take(perPage)
            .skip(offset)
            .getMany();
        return deliveryZonas;
    }

    async paginateDeliveryZonasRangos(page: number, perPage: number): Promise<DeliveryZonasRangos[]> {
        const offset = (page - 1) * perPage;
        const deliveryZonasRangos = await this.deliveryZonasRangosRepository.createQueryBuilder('deliveryZonasRango')
            .take(perPage)
            .skip(offset)
            .getMany();
        return deliveryZonasRangos;
    }

    async create(createDeliveryMetodoDto: CreateDeliveryMetodoDto): Promise<DeliveryMetodo> {
        const deliveryMetodo = new DeliveryMetodo(createDeliveryMetodoDto);

        return await this.deliveryMetodoRepository.save(deliveryMetodo);
    }

    async createDeliveryRangos(createDeliveryRangosDto: CreateDeliveryRangosDto): Promise<DeliveryRangos> {
        const deliveryRangos = new DeliveryRangos(createDeliveryRangosDto);

        return await this.deliveryRangosRepository.save(deliveryRangos);
    }

    async createDeliveryZonas(createDeliveryZonasDto: CreateDeliveryZonasDto): Promise<DeliveryZonas> {
        const deliveryZonas = new DeliveryZonas(createDeliveryZonasDto);

        return await this.deliveryZonasRepository.save(deliveryZonas);
    }

    async createDeliveryZonasRangos(createDeliveryZonasRangosDto: CreateDeliveryZonasRangosDto): Promise<DeliveryZonasRangos> {
        const deliveryZonasRangos = new DeliveryZonasRangos(createDeliveryZonasRangosDto);

        return await this.deliveryZonasRangosRepository.save(deliveryZonasRangos);
    }

    async findOne(id: number): Promise<DeliveryMetodo> {
        const deliveryMetodo = await this.deliveryMetodoRepository
            .createQueryBuilder('deliveryMetodo')
            .where('deliveryMetodo.id = :id', { id })
            .getOne();
        if (!deliveryMetodo) {
            throw new DeliveryMetodoNotFoundException();
        }

        return deliveryMetodo;
    }

    async findOneDeliveryZonas(id: number): Promise<DeliveryZonas> {
        const deliveryZonas = await this.deliveryZonasRepository
            .createQueryBuilder('deliveryZonas')
            .where('deliveryZonas.id = :id', { id })
            .getOne();
        if (!deliveryZonas) {
            throw new DeliveryZonasNotFoundException();
        }

        return deliveryZonas;
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

    async updateZonas(id: number, updateDeliveryZonasDto: UpdateDeliveryZonasDto): Promise<DeliveryZonas> {
        const deliveryZonas = await this.deliveryZonasRepository
            .createQueryBuilder('marca')
            .where('marca.id = :id', { id })
            .getOne();

        if (!deliveryZonas) {
            throw new DeliveryZonasNotFoundException();
        }

        Object.assign(deliveryZonas, updateDeliveryZonasDto);

        return await this.deliveryZonasRepository.save(deliveryZonas);
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

    async deleteZonas(id: number): Promise<void> {
        const deliveryZonas = await this.deliveryZonasRepository
            .createQueryBuilder('deliveryZonas')
            .where('deliveryZonas.id = :id', { id })
            .getOne();
        // 
        if (!deliveryZonas) {
            throw new DeliveryZonasNotFoundException();
        }

        await this.deliveryZonasRepository.softRemove(deliveryZonas);
    }
}
