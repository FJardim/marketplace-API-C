import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdenesNotFoundException } from './error/ordenes-not-found.exception';
import { Repository } from 'typeorm';
import { Ordenes } from './entities/ordenes.entity';
import { CreateOrdenesDto } from './dto/create-ordenes.dto';
import { UpdateOrdenesDto } from './dto/update-ordenes.dto';

@Injectable()
export class OrdenesService {
    constructor(
        @InjectRepository(Ordenes) private readonly ordenesRepository: Repository<Ordenes>
    ) { }

    async paginate(page: number, perPage: number): Promise<Ordenes[]> {
        const offset = (page - 1) * perPage;

        const ordenes = await this.ordenesRepository.createQueryBuilder('ordenes')
            .take(perPage)
            .skip(offset)
            .getMany();

        return ordenes;
    }

    async create(createOrdenesDto: CreateOrdenesDto): Promise<Ordenes> {
        const ordenes = new Ordenes(createOrdenesDto);

        return await this.ordenesRepository.save(ordenes);
    }

    async findOne(id: number): Promise<Ordenes> {
        const ordenes = await this.ordenesRepository.createQueryBuilder('ordenes')
            .where('ordenes.id = :id', { id })
            .getOne();

        if (!ordenes) {
            throw new OrdenesNotFoundException();
        }

        return ordenes;
    }

    async update(id: number, updateOrdenesDto: UpdateOrdenesDto): Promise<Ordenes> {
        const ordenes = await this.ordenesRepository.createQueryBuilder('ordenes')
            .where('ordenes.id = :id', { id })
            .getOne();

        if (!ordenes) {
            throw new OrdenesNotFoundException();
        }

        Object.assign(ordenes, updateOrdenesDto);

        return await this.ordenesRepository.save(ordenes);
    }

    async delete(id: number): Promise<void> {
        const ordenes = await this.ordenesRepository.createQueryBuilder('ordenes')
            .where('ordenes.id = :id', { id })
            .getOne();

        if (!ordenes) {
            throw new OrdenesNotFoundException();
        }

        await this.ordenesRepository.softRemove(ordenes);
    }
}
